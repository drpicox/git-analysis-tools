import makeWeakReporter from "./makeWeakReporter";
import getIssueWeight from "./getIssueWeight";

export default makeWeakReporter(user => {
  if (!user) return 0;

  return user.develops.reduce(
    (weight, issue) => weight + getIssueWeight(issue),
    0
  );
});
