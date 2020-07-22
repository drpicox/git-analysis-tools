import makeWeakReporter from "./makeWeakReporter";
import getIssueWeight from "./getIssueWeight";
import isIssueMerged from "./isIssueMerged";

export default makeWeakReporter(user => {
  if (!user) return 0;

  return user.develops
    .filter(issue => isIssueMerged(issue))
    .reduce((weight, issue) => weight + getIssueWeight(issue), 0);
});
