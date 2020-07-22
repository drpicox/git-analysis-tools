export default class ScoreIssueSection {
  /**
   * @param {string} [sectionText]
   */
  constructor(sectionText) {
    /** @type {string | undefined} */
    this._sectionText = sectionText;

    /** @type {number | undefined} */
    this._score = undefined;

    /** @type {Array<string>} */
    this._subsections = [];
    /** @type {number} */
    this._subsectionScore = 0;
    /** @type {Array<string>} */
    this._text = [];
    /** @type {number} */
    this._textScore = 0;
    /** @type {Array<string>} */
    this._actions = [];
    /** @type {number} */
    this._actionsScore = 0;
    /** @type {Array<string>} */
    this._expects = [];
    /** @type {number} */
    this._expectsScore = 0;
  }

  score() {
    if (this._score != null) return this._score;
    if (!this._sectionText) return 0;

    this._sectionText.split("\n").forEach(l => this._parseLine(l));

    let score = 0;
    score += this.scoreSubsections() * 0.2;
    score += this.scoreText() * 0.2;
    score += this.scoreActions() * 0.3;
    score += this.scoreExpects() * 0.3;

    return (this._score = score);
  }

  scoreSubsections() {
    this._subsectionScore = 0;
    if (this._subsections.length > 1) this._subsectionScore += 0.5;
    if (this._subsections.length > 3) this._subsectionScore += 0.5;
    return this._subsectionScore;
  }

  scoreText() {
    this._textScore = 0;
    if (this._text.length > 1) this._textScore += 0.5;
    if (this._text.length > 5) this._textScore += 0.5;
    return this._textScore;
  }

  scoreActions() {
    this._actionsScore = 0;
    if (this._actions.length > 2) this._actionsScore += 0.3;
    if (this._actions.length > 5) this._actionsScore += 0.4;
    if (this._actions.length > 10) this._actionsScore += 0.3;
    return this._actionsScore;
  }

  scoreExpects() {
    this._expectsScore = 0;
    if (this._expects.length > 2) this._expectsScore += 0.3;
    if (this._expects.length > 5) this._expectsScore += 0.4;
    if (this._expects.length > 10) this._expectsScore += 0.3;
    return this._expectsScore;
  }

  _parseLine(line) {
    if (line.startsWith("### ")) this._subsections.push(line);
    else if (/clic|type/i.test(line)) this._actions.push(line);
    else if (/see|has|there/i.test(line)) this._expects.push(line);
    else if (line.length > 30) this._text.push(line);
  }
}
