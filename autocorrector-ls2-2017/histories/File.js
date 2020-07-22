export class File {
  constructor(name) {
    this.name = name;
    this.history = null;
  }

  setHistory(history) {
    this.history = history;
  }

  setName(to) {
    this.name = to;
  }
}
