import { createWeakSelector } from "../../createWeakSelector";
import { getIssues } from "./getIssues";
import { extractIssueCommitSha } from "../";

export const getIssuesBySha = createWeakSelector(state => {
  const issues = getIssues(state);
  const result = {};
  Object.values(issues).forEach(issue => {
    const sha = extractIssueCommitSha(issue);
    if (sha) result[sha] = issue;
  });
  return result;
});
