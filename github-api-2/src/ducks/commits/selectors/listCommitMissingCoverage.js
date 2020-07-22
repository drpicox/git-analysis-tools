import { getCommits } from "./getCommits";
import { createWeakSelector } from "../../createWeakSelector";

export const listCommitMissingCoverage = createWeakSelector(state =>
  Object.values(getCommits(state))
    .filter(c => c.previousSha)
    .filter(c => !c.java || !c.js || !c.diff)
    .sort(
      (a, b) => new Date(a.mergedAt).getTime() - new Date(b.mergedAt).getTime()
    )
);
