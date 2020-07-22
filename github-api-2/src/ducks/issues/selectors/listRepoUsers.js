import { createWeakSelector } from "../../createWeakSelector";
import { listRepoIssues, getUsers } from "./";
import { extractIssueAuthorLogin } from "../extractors";

export const listRepoUsers = createWeakSelector(
  name => name,
  (state, name) => {
    const issues = listRepoIssues(state, name);
    const users = getUsers(state);
    return issues
      .map(i => extractIssueAuthorLogin(i))
      .sort()
      .filter((_, i, a) => i === 0 || a[i] !== a[i - 1])
      .map(login => users[login.toLowerCase()]);
  }
);
