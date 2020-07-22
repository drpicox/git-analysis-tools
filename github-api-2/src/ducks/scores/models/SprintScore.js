import { scoreRow } from "./scoreRow";

export class SprintScore {
  constructor(scores, table = [0.8, 0.6, 0.2, 0.05]) {
    this.scores = scores;
    this.table = table;
    this.sortedScores = this._computeSortedScores();

    this.score = this._computeScore();
  }

  _computeSortedScores() {
    return this.scores.slice().sort((a, b) => b.score - a.score);
  }

  _computeScore() {
    const { sortedScores, table } = this;
    return scoreRow(sortedScores, table);
  }
}
