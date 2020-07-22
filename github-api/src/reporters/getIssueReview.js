import makeWeakReporter from "./makeWeakReporter";
import getIssuePullRequest from "./getIssuePullRequest";

const NOBODY = { author: "nobody", state: "N/A" };

export default makeWeakReporter(issue => {
  const pullRequest = getIssuePullRequest(issue);
  if (!pullRequest) return NOBODY;

  const reviews = pullRequest.reviews.nodes;
  if (reviews.length === 0) return NOBODY;

  const approved = reviews.find(({ state }) => state === "APPROVED");
  if (approved) return { author: approved.author.login, state: approved.state };

  const first = reviews[0];
  return { author: first.author.login, state: first.state };
});
