export class Coder {
  constructor(name) {
    this.name = name;
    this.history = null;
  }

  setHistory(history) {
    this.history = history;
  }
}
