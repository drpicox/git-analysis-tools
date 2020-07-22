import getIssuePullRequest from "./getIssuePullRequest";

import makeWeakReporter from "./makeWeakReporter";
import getIssueColumn from "./getIssueColumn";

export default makeWeakReporter(issue => {
  if (!issue) return false;

  const pullRequest = getIssuePullRequest(issue);
  const column = getIssueColumn(issue);

  if (pullRequest) return false;
  if (column === "merged") return true;
  if (column === "review") return true;
  if (column === "annotated") return true;
  return false;
});
