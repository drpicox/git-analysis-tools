import ScoreIssueLine from "./ScoreIssueLine";

export default class ScoreIssue {
  constructor(issue) {
    this._issue = issue;

    /** @type {number | undefined} */
    this._score = undefined;

    /** @type {Array<ScoreIssueLine>} */
    this._scoreLines = [];
  }

  /**
   * @returns {number}
   */
  score() {
    if (this._score != null) return this._score;
    if (!this._issue) return 0;

    this._issue.body
      .split(/\n|\./g)
      .map(x => x.trim())
      .filter(Boolean)
      .forEach((line, index) => {
        const previousScoreLine = this._scoreLines[index - 1];
        const scoreLine = new ScoreIssueLine(line, previousScoreLine);
        this._scoreLines[index] = scoreLine;
      });

    if (this._scoreLines.length === 0) return (this._score = 0);
    return (this._score = this._scoreLines[
      this._scoreLines.length - 1
    ].score());
  }

  scoreLines() {
    this.score();

    return this._scoreLines;
  }
}
