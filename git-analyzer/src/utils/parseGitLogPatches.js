const parseDiff = require("diffparser");
const Parser = require("./Parser");

module.exports = function parseGitLogPatches(patches) {
  const parser = new Parser(patches);

  const commits = [];
  while (parser.hasNext()) {
    const hash = parser.expect(/^commit /).acceptUntil("\n");
    const author = parser.skipUntil("Author: ").acceptUntil("\n");
    const date = new Date(
      parser
        .skip("\n")
        .expect("Date:")
        .skipSpaces()
        .acceptUntil("\n")
    ).getTime();
    const diff = parseDiff(
      parser.skipUntil(/^diff --git/).acceptUntil(/^commit/)
    );

    commits.push({ hash, author, date, diff });
  }

  commits.reverse();
  return commits;
};
