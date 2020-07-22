import makeWeakReporter from "./makeWeakReporter";
import getIssueRejectionCount from "./getIssueRejectionCount";

export default makeWeakReporter(user => {
  if (!user) return 0;

  return user.develops.reduce(
    (count, issue) => count + getIssueRejectionCount(issue),
    0
  );
});
