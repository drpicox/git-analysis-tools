import { createSelector } from "reselect";
import { listIssues } from "./listIssues";

export function makeGetNextIssue() {
  return createSelector(
    listIssues,
    (_, issue) => issue,
    (issues, issue) => {
      const index = issues.indexOf(issue);
      return issues[index + 1];
    }
  );
}
