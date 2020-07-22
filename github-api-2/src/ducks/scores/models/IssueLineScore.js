import { scoreTable } from "./";
import { mapEach } from "../../../lib";

const POINTS_BY_COUNT = {
  section: [7, 8, 9, 10],
  subsection: [0, 5, 7, 10],
  text: [0, 2, 3, 5, 7, 8, 9, 10],
  action: [0, 2, 3, 5, 7, 8, 9, 10],
  expect: [0, 2, 3, 5, 7, 8, 9, 10],
  other: [0]
};
const INITIAL_COUNTS = mapEach(POINTS_BY_COUNT, () => 0);

export class IssueLineScore {
  /**
   * @param {string} line
   * @param {IssueLineScore} [previous]
   */
  constructor(line, previous) {
    /** @type {string} */
    this.line = line;
    /** @type {IssueLineScore | undefined} */
    this._previous = previous;

    /** @type {string} */
    this.type = this._computeType();

    /** @type {{[type: string]: number}} */
    this.counts = this._computeCounts();

    /** @type {{[type: string]: number}} */
    this.partialScores = this._computePartialScores();

    /** @type {number} */
    this.score = this._computeScore();
  }

  _computeCounts() {
    const result = this._previous
      ? { ...this._previous.counts }
      : { ...INITIAL_COUNTS };

    result[this.type] += 1;
    return result;
  }

  _computePartialScores() {
    return mapEach(
      this.counts,
      (partialCount, type) =>
        scoreTable(POINTS_BY_COUNT[type], partialCount) / 10
    );
  }

  _computeScore() {
    let score = 0;
    score += this.partialScores["subsection"] * 0.2;
    score += this.partialScores["text"] * 0.2;
    score += this.partialScores["action"] * 0.3;
    score += this.partialScores["expect"] * 0.3;
    score *= this.partialScores["section"];

    return score;
  }

  _computeType() {
    const { line } = this;
    if (line.startsWith("## ")) return "section";
    else if (line.startsWith("### ")) return "subsection";
    else if (/clic|type|pres|sele/i.test(line)) return "action";
    else if (/see|has|there/i.test(line)) return "expect";
    else if (line.length > 30) return "text";
    return "other";
  }
}
