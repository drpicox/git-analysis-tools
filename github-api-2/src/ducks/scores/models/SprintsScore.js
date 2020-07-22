import { getSprintNumber, SPRINT_NUMBERS } from "../../../sprintEnds";
import { groupBy } from "../../../lib";
import { SprintScore } from "./SprintScore";
import { scoreRow } from "./scoreRow";

export class SprintsScore {
  constructor(
    scores,
    table = [0.29, 0.3, 0.41, 0.2, 0.1, 0.1, 0.05],
    innerTable
  ) {
    /** @type {{score:number, date:Date}[]} */
    this.scores = scores;
    this.table = table;
    this.innerTable = innerTable;

    this.sprints = this._computeSprints();
    this.sortedSprints = this._computeSortedSprints();

    this.score = this._computeScore();
  }

  _computeSprints() {
    const groups = groupBy(this.scores, s => `${getSprintNumber(s.date)}`);
    delete groups[`${-1}`];

    const scores = SPRINT_NUMBERS.map(sprint => groups[sprint] || []);
    return scores.map(s => new SprintScore(s, this.innerTable));
  }

  _computeSortedSprints() {
    return this.sprints.slice().sort((a, b) => b.score - a.score);
  }

  _computeScore() {
    const { sortedSprints, table } = this;
    return scoreRow(sortedSprints, table);
  }
}
