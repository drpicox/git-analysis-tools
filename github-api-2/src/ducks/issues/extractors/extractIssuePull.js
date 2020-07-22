import makeWeakReporter from "../../../lib/makeWeakReporter";
import { extractIssueWeight } from "./extractIssueWeight";

export const extractIssuePull = makeWeakReporter(issue => {
  if (!issue) return null;
  if (!extractIssueWeight(issue)) return null;

  const pulls = issue.timelineItems.nodes
    .filter(({ __typename }) => __typename === "CrossReferencedEvent")
    .map(({ source }) => source)
    .filter(({ __typename }) => __typename === "PullRequest");

  const mergeds = pulls
    .filter(p => p.merged)
    .sort((a, b) => {
      if (a.mergedAt < b.mergedAt) return -1;
      if (b.mergedAt < a.mergedAt) return +1;
      return 0;
    });

  if (mergeds.length > 0) return mergeds[0];

  return pulls[pulls.length - 1];
});
