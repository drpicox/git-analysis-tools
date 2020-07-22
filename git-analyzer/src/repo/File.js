module.exports = class File {
  constructor(name) {
    this.name = name;
    this.lines = [""];
  }

  setName(name) {
    this.name = name;
  }

  processChunk(hash, type, line, content) {
    console.log(hash, this.name, type, line, content);
    switch (type) {
      case "normal":
        this._expectContent(hash, "normal", line, content);
        break;
      case "del":
        this._expectContent(hash, "del", line, content);
        this.lines.splice(line, 1);
        break;
      case "add":
        this.lines.splice(line, 0, content);
        break;
      default:
        throw new Error(`Unkown chunk type "${type}" at "${hash}"`);
    }
  }

  _expectContent(hash, reason, line, content) {
    if (this.lines[line] !== content) {
      throw new Error(
        `Unexpected content while ${reason} in ${hash}:${
          this.name
        }:${line}.${"\n"}Actual: "${content}"${"\n"}Expected: "${
          this.lines[line]
        }"${"\n"}File: ${this.name}:${line} \n${this.lines
          .map((line, index) => `${index}:${line}`)
          .join("\n")}`
      );
    }
  }
};
