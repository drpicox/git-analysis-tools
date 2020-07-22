import { extractIssuePull } from "./";

export function extractIssueMergedByLogin(issue) {
  const pull = extractIssuePull(issue);
  if (!pull || !pull.mergedBy) return null;

  return pull.mergedBy.login;
}
