import makeWeakReporter from "../../../lib/makeWeakReporter";
import { extractIssuePull } from "./";

export const extractIssueReviews = makeWeakReporter(issue => {
  const pull = extractIssuePull(issue);
  if (!pull) return [];

  const reviews = pull.reviews.nodes;
  if (reviews.length === 0) return [];

  const result = reviews.map(r => ({
    ...r,
    author: r.author.login,
    issue
  }));
  return result;
});
