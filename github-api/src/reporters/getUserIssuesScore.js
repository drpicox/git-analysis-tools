import makeWeakReporter from "./makeWeakReporter";
import getIssueBodyScore from "./getIssueBodyScore";

export default makeWeakReporter(user => {
  if (!user) return 0;

  return user.issues.reduce(
    (score, issue) => score + getIssueBodyScore(issue),
    0
  );
});
