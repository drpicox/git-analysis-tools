import makeWeakReporter from "../../../lib/makeWeakReporter";
import { extractIssuePull } from "./";

export const extractIssueCommitSha = makeWeakReporter(issue => {
  const pull = extractIssuePull(issue);
  if (!pull || !pull.mergeCommit) return null;

  return pull.mergeCommit.commitUrl.split("/").slice(-1)[0];
});
