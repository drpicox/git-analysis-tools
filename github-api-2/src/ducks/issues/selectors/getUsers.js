import { createWeakSelector } from "../../createWeakSelector";
import { listIssues } from "./listIssues";
import {
  extractIssueDeveloperLogin,
  extractIssueMergedByLogin,
  extractIssueReviews
} from "../extractors";

function pushValue(users, login, name, value) {
  login = login && login.toLowerCase();
  users[login] = users[login] || {
    login,
    issues: [],
    develops: [],
    reviews: [],
    merges: []
  };
  users[login][name].push(value);
}

export const getUsers = createWeakSelector(state => {
  const issues = listIssues(state);
  const result = {};
  issues.forEach(i => {
    const author = i.author.login;
    pushValue(result, author, "issues", i);

    const developer = extractIssueDeveloperLogin(i);
    pushValue(result, developer, "develops", i);

    const merger = extractIssueMergedByLogin(i);
    pushValue(result, merger, "merges", i);

    const reviews = extractIssueReviews(i);
    reviews.forEach(r =>
      pushValue(result, r.author, "reviews", {
        issue: i,
        ...r
      })
    );
  });
  delete result.drpicox;
  delete result.null;
  delete result.undefined;
  return result;
});
