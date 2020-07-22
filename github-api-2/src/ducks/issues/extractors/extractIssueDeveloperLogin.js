import { extractIssuePull } from "./";

export function extractIssueDeveloperLogin(issue) {
  const pull = extractIssuePull(issue);
  return (pull && pull.author.login) || null;
}
