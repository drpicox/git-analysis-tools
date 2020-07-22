import makeWeakReporter from "../../../lib/makeWeakReporter";
import { extractIssueMerge } from "./";

/**
 * @type {(any) => Array<import('./extractIssueMerge').Merge>}
 */
export const extractIssuesMerges = makeWeakReporter(issues => {
  const previousShaByRepo = {};

  return issues
    .map(extractIssueMerge)
    .filter(Boolean)
    .sort((a, b) => a.mergedAt - b.mergedAt)
    .map((c, i, a) => {
      c.previousSha =
        previousShaByRepo[c.repo] || "1cd6067ec71627e93f48edee107f7b6aaba681aa";
      previousShaByRepo[c.repo] = c.sha;
      return c;
    });
});
