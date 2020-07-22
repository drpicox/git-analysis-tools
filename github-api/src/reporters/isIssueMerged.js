import getIssuePullRequest from "./getIssuePullRequest";

export default issue => {
  const pullRequest = getIssuePullRequest(issue);
  return (pullRequest && pullRequest.merged) || false;
};
