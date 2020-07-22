import scoreWeek from "./scoreWeek";
import ScoreIssue from "./ScoreIssue";

export default class ScoreUserWeekIssues {
  constructor(issues) {
    /** @type {number | undefined} */
    this._score = undefined;

    /** @type {Array<ScoreIssue>} */
    this._items = issues.map(i => new ScoreIssue(i));
  }

  /**
   * @returns {number}
   */
  score() {
    if (this._score != null) return this._score;

    return (this._score = scoreWeek(this._items.map(x => x.score()), [
      1.0,
      0.3,
      0.1
    ]));
  }

  items() {
    return this._items;
  }
}
