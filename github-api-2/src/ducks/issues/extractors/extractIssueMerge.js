import makeWeakReporter from "../../../lib/makeWeakReporter";
import { extractIssuePull, extractIssueCommitSha } from "./";

/**
 * @typedef {Object} Merge
 * @property {string} repo
 * @property {string} sha
 * @property {string} previousSha
 * @property {Date} mergedAt
 * @property {string} developer
 * @property {string} merger
 * @property {Array<string>} approvals
 */

/**
 * @type {(any) => Merge}
 */
export const extractIssueMerge = makeWeakReporter(issue => {
  const pull = extractIssuePull(issue);
  if (!pull || !pull.mergedBy) return null;

  return {
    repo: issue.repository.name,
    sha: extractIssueCommitSha(issue),
    previousSha: null,
    mergedAt: new Date(pull.mergedAt),
    developer: pull.author.login,
    merger: pull.mergedBy.login,
    approvals: pull.reviews.nodes
      .filter(r => r.state === "APPROVED")
      .map(r => r.author.login)
      .sort()
      .filter((_, i, a) => i === 0 || a[i - 1] !== a[i])
  };
});
