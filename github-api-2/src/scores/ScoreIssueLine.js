import scoreTable from "./scoreTable";

const POINTS_BY_COUNT = {
  section: [7, 8, 9, 10],
  subsection: [0, 5, 7, 10],
  text: [0, 1, 2, 3, 5, 7, 6, 7, 8, 9, 10],
  action: [0, 1, 2, 3, 5, 7, 6, 7, 8, 9, 10],
  expect: [0, 1, 2, 3, 5, 7, 6, 7, 8, 9, 10]
};

export default class ScoreIssueLine {
  /**
   * @param {string} line
   * @param {ScoreIssueLine} [previous]
   */
  constructor(line, previous) {
    /** @type {string} */
    this._line = line;
    /** @type {ScoreIssueLine | undefined} */
    this._previous = previous;

    /** @type {number | undefined} */
    this._score = undefined;

    /** @type {string | undefined} */
    this._type = undefined;

    /** @type {{[type: string]: number}} */
    this._counts = {};

    /** @type {{[type: string]: number}} */
    this._partialScores = {};
  }

  score() {
    if (this._score != null) return this._score;

    let score = 0;
    score += this.partialScore("subsection") * 0.2;
    score += this.partialScore("text") * 0.2;
    score += this.partialScore("action") * 0.3;
    score += this.partialScore("expect") * 0.3;
    score *= this.partialScore("section") / 10;

    return (this._score = score);
  }

  /**
   * @returns {string}
   */
  type() {
    if (this._type != null) return this._type;

    this._parseLine(this._line);
    return this._type;
  }

  /**
   * @param {string} type
   * @returns {number}
   */
  count(type) {
    if (this._counts[type] != null) return this._counts[type];
    const myType = this.type();
    const isMyType = myType === type;

    let count = 0;
    if (isMyType) count += 1;
    if (this._previous) count += this._previous.count(type);

    return (this._counts[type] = count);
  }

  /**
   * @param {string} type
   * @returns {number}
   */
  partialScore(type) {
    if (this._partialScores[type] != null) return this._partialScores[type];
    const pointsByCount = POINTS_BY_COUNT[type];
    if (!pointsByCount) return 0;
    const index = this.count(type);

    return (this._partialScores[type] = scoreTable(pointsByCount, index));
  }

  _parseLine(line) {
    if (line.startsWith("## ")) this._type = "section";
    else if (line.startsWith("### ")) this._type = "subsection";
    else if (/clic|type|pres|sele/i.test(line)) this._type = "action";
    else if (/see|has|there/i.test(line)) this._type = "expect";
    else if (line.length > 30) this._type = "text";
    else this._type = "other";
  }
}
