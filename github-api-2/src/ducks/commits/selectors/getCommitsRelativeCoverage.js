import { getCommits } from "./getCommits";
import { extractCommitsRelativeCoverage } from "../extractors";
import { createWeakSelector } from "../../createWeakSelector";

/**
 * @type {(any) => {[sha:string]: import('../').CommitRelativeCoverage}}
 */
export const getCommitsRelativeCoverage = createWeakSelector(state =>
  extractCommitsRelativeCoverage(getCommits(state))
);
