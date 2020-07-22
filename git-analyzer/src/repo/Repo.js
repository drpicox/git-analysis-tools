const Author = require("./Author");
const File = require("./File");

module.exports = class Repo {
  constructor(copy) {
    if (copy) Object.assign(this, copy);
    else {
      this.authors = {};
      this.files = {};
    }
  }

  withAuthor(authorId) {
    const copy = new Repo(this);
    copy.authors[authorId] = new Author(authorId);
    return copy;
  }

  processRawCommits(rawCommits) {
    rawCommits.forEach(rawCommit => this.processRawCommit(rawCommit));
  }

  processRawCommit(rawCommit) {
    const { hash, diff } = rawCommit;
    diff.forEach(diffFile => this.processRawDiffFile(hash, diffFile));
  }

  processRawDiffFile(hash, diffFile) {
    const { from, to, chunks } = diffFile;
    const file = this.moveFile(hash, from, to);
    this.processRawChunks(hash, file, chunks);
  }

  processRawChunks(hash, file, chunks) {
    let offset = 0;
    chunks.forEach(({ changes }) =>
      changes.forEach(({ type, newLine, oldLine, content }) => {
        const line = newLine || oldLine + offset;
        if (type === "add") offset += 1;
        if (type === "del") offset -= 1;
        file.processChunk(hash, type, line, content.slice(1));
      })
    );
  }

  moveFile(hash, from, to) {
    if (to === "/dev/null") delete this.files[to];
    if (from === "/dev/null") return (this.files[to] = new File(to));
    const file = this.files[from];
    if (!file) throw new Error(`Cannot find from file "${hash}:${from}".`);
    delete this.files[from];
    file.setName(to);
    this.files[to] = file;
    return file;
  }
};
