import { getCommits } from "./getCommits";
import { createWeakSelector } from "../../createWeakSelector";

/**
 * @type {(state: any, sha: string) => Array<import('./').Commit>}
 */
export const listCommitHistory = createWeakSelector(
  sha => sha,
  (state, sha) => {
    const result = [];
    const commits = getCommits(state);
    let current = commits[sha];
    while (current) {
      result.unshift(current);
      current = commits[current.previousSha];
    }
    return result;
  }
);
