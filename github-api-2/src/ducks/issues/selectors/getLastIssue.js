import { listIssues } from "./listIssues";

export function getLastIssue(state) {
  const issues = listIssues(state);
  return issues[issues.length - 1];
}
