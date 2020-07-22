import { extractIssueWeight } from "../ducks";

export default class WeightUserWeekDevelops {
  constructor(issues) {
    /** @type {number | undefined} */
    this._weight = undefined;

    /** @type {Array<number>} */
    this._weights = issues.map(extractIssueWeight);
  }

  /**
   * @returns {number}
   */
  weight() {
    if (this._weight != null) return this._weight;

    return (this._weight = this._weights.reduce((a, b) => a + b, 0));
  }

  weights() {
    return this._weights;
  }
}
