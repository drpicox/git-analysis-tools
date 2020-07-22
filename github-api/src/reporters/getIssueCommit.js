import makeWeakReporter from "./makeWeakReporter";
import getIssuePullRequest from "./getIssuePullRequest";

export default makeWeakReporter(issue => {
  const pullRequest = getIssuePullRequest(issue);
  if (!pullRequest || !pullRequest.mergeCommit) return null;

  return pullRequest.mergeCommit.commitUrl.split("/").slice(-1)[0];
});
