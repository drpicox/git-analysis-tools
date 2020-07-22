import getIssuePullRequest from "./getIssuePullRequest";

export default issue => {
  const pullRequest = getIssuePullRequest(issue);
  return (pullRequest && pullRequest.author.login) || "nobody";
  /*

  if (!pullRequest) return "nobody";
  return pullRequest.author.login;
  */
};
