import { createWeakSelector } from "../../createWeakSelector";
import { IssueLineScore } from "../";

export default class IssueBodyScore {
  constructor(body) {
    /** @type {string} */
    this.body = body;

    /** @type {Array<IssueLineScore>} */
    this.lines = this._computeLines();

    /** @type {number} */
    this.score = this._computeScore();
  }

  _computeLines() {
    const result = [];
    this.body
      .split(/\n|\./g)
      .map(x => x.trim())
      .filter(Boolean)
      .forEach(line => {
        const current = new IssueLineScore(line, result[result.length - 1]);
        result.push(current);
      });
    return result;
  }

  _computeScore() {
    if (this.lines.length === 0) return 0;
    return this.lines[this.lines.length - 1].score;
  }
}

/** @type {(any, body:string) => IssueBodyScore} */
export const getIssueBodyScore = createWeakSelector(
  body => body,
  (state, body) => {
    return new IssueBodyScore(body);
  }
);
