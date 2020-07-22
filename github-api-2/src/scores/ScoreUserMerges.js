import scoreTable from "./scoreTable";

export default class ScoreUserMerges {
  constructor(mergesByWeeks) {
    /** @type {number | undefined} */
    this._score = undefined;

    /** @type {number} */
    this._totalCount = mergesByWeeks
      .map(w => w.length)
      .reduce((a, b) => a + b, 0);
  }

  /**
   * @returns {number}
   */
  score() {
    if (this._score != null) return this._score;

    return (this._score = scoreTable([0, 5, 8, 10], this._totalCount));
  }

  totalCount() {
    return this._totalCount;
  }
}
