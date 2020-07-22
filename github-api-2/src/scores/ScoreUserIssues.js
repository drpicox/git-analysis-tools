import scoreWeeks from "./scoreWeeks";
import ScoreUserWeekIssues from "./ScoreUserWeekIssues";

export default class ScoreUserIssues {
  constructor(issuesByWeeks) {
    /** @type {number | undefined} */
    this._score = undefined;

    /** @type {Array<ScoreUserWeekIssues>} */
    this._weeks = issuesByWeeks.map(w => new ScoreUserWeekIssues(w));
  }

  /**
   * @returns {number}
   */
  score() {
    if (this._score != null) return this._score;

    return (this._score = scoreWeeks(this._weeks.map(x => x.score())));
  }

  weeks() {
    return this._weeks;
  }
}
