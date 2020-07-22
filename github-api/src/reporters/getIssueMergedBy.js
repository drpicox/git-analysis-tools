import getIssuePullRequest from "./getIssuePullRequest";

export default issue => {
  const pullRequest = getIssuePullRequest(issue);
  if (!pullRequest || !pullRequest.mergedBy) return "nobody";

  return pullRequest.mergedBy.login;
};
