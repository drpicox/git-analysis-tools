import { createWeakSelector } from "../../createWeakSelector";
import { listUserDevelopedIssues } from "../../";
import { ItemsScore } from "../models";
import { extractIssueCommitSha } from "../../issues";
import { getCommitRelativeCoverage } from "../../commits";

export class UserCoverageScore {
  /**
   * @param {any} issue
   * @param {import("../../").CommitRelativeCoverage} relative
   */
  constructor(issue, relative) {
    this.issue = issue;
    this.relative = relative;
    this.score = this._computeScore();
  }

  _computeScore() {
    const r = this.relative;
    return Math.min(
      1,
      Math.max(
        0,
        0.25 * (r.java.lines + r.java.branches + r.js.lines + r.js.branches)
      )
    );
  }
}

export class UserCoveragesScore {
  /**
   * @param {any} login
   * @param {ItemsScore} items
   */
  constructor(login, items) {
    this.login = login;
    this.items = items;
    this.boxes = items.items;
    this.score = this.items.score;
  }
}

/** @type {(any, login:string) => UserCoveragesScore} */
export const getUserCoveragesScore = createWeakSelector(
  login => login,
  (state, login) => {
    const coverages = listUserDevelopedIssues(state, login)
      .map(issue => {
        const sha = extractIssueCommitSha(issue);
        if (!sha) return null;
        const relative = getCommitRelativeCoverage(state, sha);
        if (!relative || !relative.java) return null;
        return new UserCoverageScore(issue, relative);
      })
      .filter(Boolean);

    const items = new ItemsScore(coverages, [0.29, 0.31, 0.3, 0.1, 0]);
    return new UserCoveragesScore(login, items);
  }
);
