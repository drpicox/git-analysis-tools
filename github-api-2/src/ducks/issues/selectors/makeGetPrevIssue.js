import { createSelector } from "reselect";
import { listIssues } from "./listIssues";

export function makeGetPrevIssue() {
  return createSelector(
    listIssues,
    (_, issue) => issue,
    (issues, issue) => {
      const index = issues.indexOf(issue);
      return issues[index - 1];
    }
  );
}
