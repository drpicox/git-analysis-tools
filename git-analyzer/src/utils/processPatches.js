const parseDiff = require("diffparser");
const Parser = require("./Parser");

function processCommit(parser, { onCommit }) {
  const hashes = parser
    .expect("commit ")
    .acceptUntil("\n")
    .split(" ");

  const commit = { hash: hashes[0], parents: hashes.slice(1) };
  onCommit(commit);
}

function processAuthor(parser, { onAuthor }) {
  const author = parser
    .skipUntil("Author: ")
    .expect("Author: ")
    .acceptUntil("\n");

  onAuthor(author);
}

function processDate(parser, { onDate }) {
  const date = new Date(
    parser
      .skip("\n")
      .expect("Date:")
      .skipSpaces()
      .acceptUntil("\n")
  ).getTime();

  onDate(date);
}

function processFileDiff(parser, { onFileDeleted }) {
  const [oldFile, newFile] = parser
    .expect("diff --git ")
    .acceptUntil("\n")
    .split(" ")
    .map(name => name.slice(2));

  if (oldFile !== "/dev/null" && oldFile !== newFile) onFileDeleted(oldFile);
  if (newFile === "/dev/null") return onFileDeleted(oldFile);

  let [, oldStart, , newStart] = parser
    .skipUntil("\n@@ -")
    .skip("\n")
    .accept(/@@[^\n]*\n/)
    .match(/@@ -(\d+),(\d+) \+(\d+),(\d+) @@[^\n]*\n/);

  [oldStart, newStart] = [+oldStart, +newStart];
  console.log(newStart, oldStart, oldFile, newFile);
  console.log(parser);
}

function processDiff(parser, events) {
  if (parser.peek("diff --git")) return processFileDiff(parser, events);
  if (parser.peek("diff --combined")) return processMergeDiff(parser, events);
  throw new Error(`Unknown diff ${parser.toString()}`);
}

function processDiffs(parser, events) {
  parser.skipUntil("\ndiff ");
  while (parser.skip(/\n*/).peek(/^diff/)) {
    const diff = parser.acceptUntil(/\n+(diff|commit)/);
    processDiff(new Parser(diff), events);
  }

  parser.skip(/\n*/);
}

module.exports = function processPatches(patches, events) {
  const parser = new Parser(patches);

  while (parser.hasNext()) {
    processCommit(parser, events);
    processAuthor(parser, events);
    processDate(parser, events);
    processDiffs(parser, events);
  }
};
