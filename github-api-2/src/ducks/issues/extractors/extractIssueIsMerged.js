import { extractIssuePull } from "./";

export function extractIssueIsMerged(issue) {
  const pull = extractIssuePull(issue);
  if (!pull || !pull.mergedBy) return false;

  return true;
}
