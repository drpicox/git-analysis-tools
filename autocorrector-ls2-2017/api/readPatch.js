import parse from "diffparser";
import { readText } from "./readText";

class Lines {
  constructor(text) {
    this.current = 0;
    this.lines = text.split("\n");
  }
  isEnd() {
    return this.current >= this.lines.length;
  }
  peek(n = 0) {
    return this.lines[this.current + n];
  }
  shift(n = 1) {
    const result = this.peek(n - 1);
    this.current += n;
    return result;
  }
}

export async function readPatch(path) {
  const text = await readText(path);
  const lines = new Lines(text);

  const commits = [];
  while (hasMoreCommits(lines)) {
    const commit = readCommit(lines);
    commits.push(commit);
  }

  return commits;
}

function hasMoreCommits(lines) {
  return !lines.isEnd();
}

function readCommit(lines) {
  const sha = readSha(lines.shift());
  const user = readUser(lines.shift());
  const date = readDate(lines.shift());
  const subject = readSubject(lines);

  skipFirstBlankOrEmpty(lines);
  let diffs = lines.shift();
  while (!lines.isEnd() && !/^From /.test(lines.peek())) {
    diffs = diffs + "\n" + lines.shift();
  }
  diffs = parse(diffs);

  return { sha, user, date, subject, diffs };
}

function readDate(line) {
  return new Date(line.slice(5));
}

function readSha(line) {
  return line.split(" ")[1];
}

function readSubject(lines) {
  const subject = lines.shift().slice(9);
  while (lines.shift() !== "---");
  return subject;
}

function readUser(line) {
  return line.slice(6);
}

function skipDiffCommand(lines) {
  lines.shift();
}

function skipFirstBlankOrEmpty(lines) {
  while (lines.peek()[0] === " " || !lines.peek()) lines.shift();
}

function skipNoNewLineAtEndOfFile(lines) {
  if (lines.peek() === "\\ No newline at end of file") lines.shift();
}
