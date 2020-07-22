import { createWeakSelector } from "../../createWeakSelector";
import { getCommitsRelativeCoverage } from "./getCommitsRelativeCoverage";

/**
 * @type {(any,sha:string) => import('../').CommitRelativeCoverage}
 */
export const getCommitRelativeCoverage = createWeakSelector(
  sha => sha,
  (state, sha) => {
    const commits = getCommitsRelativeCoverage(state);
    return commits[sha];
  }
);
