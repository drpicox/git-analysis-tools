import scoreTable from "./scoreTable";

export default class ScoreUserWeekReviews {
  constructor(reviews) {
    /** @type {number | undefined} */
    this._score = undefined;

    /** @type {number} */
    this._count = reviews.length;
  }

  /**
   * @returns {number}
   */
  score() {
    if (this._score != null) return this._score;

    return (this._score = scoreTable([0, 6, 8, 10], this._count));
  }
}
