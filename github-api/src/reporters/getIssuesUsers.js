import makeWeakReporter from "./makeWeakReporter";
import getIssueAuthor from "./getIssueAuthor";
import getIssueDeveloper from "./getIssueDeveloper";
import getIssueReview from "./getIssueReview";
import getIssueMergedBy from "./getIssueMergedBy";

export default makeWeakReporter(issues => {
  if (!issues || !issues.length) return [];

  const userMap = {};
  const getUser = login =>
    (userMap[login || "nobody"] = userMap[login || "nobody"] || {
      login: login || "nobody",
      issues: [],
      develops: [],
      reviews: [],
      merges: []
    });
  issues.forEach(issue => {
    getUser(getIssueAuthor(issue)).issues.push(issue);
    getUser(getIssueDeveloper(issue)).develops.push(issue);
    getUser(getIssueReview(issue).author).reviews.push(issue);
    getUser(getIssueMergedBy(issue)).merges.push(issue);
  });

  return Object.values(userMap);
});
