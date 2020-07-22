module.exports = class Parser {
  constructor(text) {
    this.index = 0;
    this.text = text;
  }

  hasNext() {
    const { index, text } = this;
    return index < text.length;
  }

  expect(token) {
    if (!this.accept(token))
      throw new Error(`Expected "${token}", at ${this.toString()}`);
    return this;
  }

  skip(token) {
    this.accept(token);
    return this;
  }

  skipUntil(token) {
    this.acceptUntil(token);
    return this;
  }

  skipSpaces() {
    return this.skip(/^\s+/);
  }

  acceptUntil(token) {
    let result = "";
    while (!this.peek(token) && this.hasNext()) {
      result += this._acceptChar();
    }
    return result;
  }

  accept(token) {
    if (token instanceof Parser) return Object.assign(this, token);
    if (typeof token === "string") return this._acceptString(token);
    if (typeof token === "object") return this._acceptRegExp(token);
    return this._acceptChar();
  }

  peek(token) {
    if (typeof token === "string") return this._matchString(token);
    if (typeof token === "object") return this._matchRegExp(token);
    return this._matchChar();
  }

  _acceptChar() {
    const char = this._matchChar();
    this.index += 1;
    return char;
  }

  _acceptString(string) {
    if (this._matchString(string)) {
      this.index += string.length;
      return string;
    }
    return undefined;
  }

  _acceptRegExp(regexp) {
    const match = this._matchRegExp(regexp);
    if (match) {
      this.index += match.length;
      return match;
    }
    return undefined;
  }

  _matchChar() {
    const { text, index } = this;
    return text[index];
  }

  _matchString(string) {
    const { text, index } = this;
    const present = text.slice(index, string.length + index);
    return (present === string && string) || undefined;
  }

  _matchRegExp(regexp) {
    const { text, index } = this;
    const matchingText = text.slice(index);
    const match = matchingText.match(regexp);
    if (match && match.index === 0) return match[0];

    return undefined;
  }

  toString() {
    const { text, index } = this;
    return `>${text
      .slice(Math.max(0, index - 30), index)
      .replace(/\n/g, "\\n")}·${text
      .slice(index, Math.min(index + 30, text.length))
      .replace(/\n/g, "\\n")}`;
  }
};
