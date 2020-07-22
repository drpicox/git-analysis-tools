import scoreWeeks from "./scoreWeeks";
import WeightUserWeekDevelops from "./WeightUserWeekDevelops";

export default class ScoreUserDevelops {
  constructor(developsByWeeks) {
    /** @type {number | undefined} */
    this._score = undefined;

    /** @type {Array<WeightUserWeekDevelops>} */
    this._weeks = developsByWeeks.map(w => new WeightUserWeekDevelops(w));

    /** @type {Array<number> | undefined} */
    this._weeksScores = undefined;
  }

  /**
   * @returns {number}
   */
  score() {
    if (this._score != null) return this._score;

    const weights = this._weeks.map(x => x.weight());
    const balancedWeights = [...weights];
    for (let i = 0; i < weights.length - 1; i += 1) {
      const currentWeight = weights[i];
      const nextWeight = weights[i + 1];
      if (currentWeight < 6 && nextWeight > 6) {
        const nextMax = nextWeight - 6;
        const currentMax = 6 - currentWeight;
        const moveWeight = Math.min(nextMax, currentMax);
        balancedWeights[i] += moveWeight;
        balancedWeights[i + 1] -= moveWeight;
      }
    }

    this._weeksScores = balancedWeights.map(w => (10 * Math.min(w, 6)) / 6);
    return (this._score = scoreWeeks(this._weeksScores));
  }

  weeks() {
    return this._weeksScores;
  }
}
