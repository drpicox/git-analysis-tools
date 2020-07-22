import scoreWeeks from "./scoreWeeks";
import ScoreUserWeekReviews from "./ScoreUserWeekReviews";

export default class ScoreUserReviews {
  constructor(reviewsByWeeks) {
    /** @type {number | undefined} */
    this._score = undefined;

    /** @type {Array<ScoreUserWeekReviews>} */
    this._weeks = reviewsByWeeks.map(w => new ScoreUserWeekReviews(w));
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
