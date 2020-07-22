import { createWeakSelector } from "../../createWeakSelector";
import { listUserMergedIssues } from "../../";
import { ItemsScore } from "../models";
import { extractIssueCommitSha } from "../../issues";
import { getCommitRelativeCoverage } from "../../commits";

export class UserMergeScore {
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

    if (r.js.total > 0 && r.java.total > 0) return 1;
    if (r.js.total > 0 || r.java.total > 0) return 0.5;
    return 0.3;
  }
}

export class UserMergesScore {
  /**
   * @param {any} login
   * @param {ItemsScore} items
   */
  constructor(login, items) {
    this.login = login;
    this.items = items;
    this.boxes = items.items;
    this.score = this._computeScore();
  }

  _computeScore() {
    return Math.max(0.3, this.items.score);
  }
}

/** @type {(any, login:string) => UserMergesScore} */
export const getUserMergesScore = createWeakSelector(
  login => login,
  (state, login) => {
    const coverages = listUserMergedIssues(state, login)
      .map(issue => {
        const sha = extractIssueCommitSha(issue);
        if (!sha) return null;
        const relative = getCommitRelativeCoverage(state, sha);
        if (!relative || !relative.java) return null;
        return new UserMergeScore(issue, relative);
      })
      .filter(Boolean);

    const items = new ItemsScore(coverages, 3);
    return new UserMergesScore(login, items);
  }
);
