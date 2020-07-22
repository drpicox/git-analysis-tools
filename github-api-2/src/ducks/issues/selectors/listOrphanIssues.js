import { createWeakSelector } from "../../createWeakSelector";
import { listIssues } from "./listIssues";
import { extractIssueColumn, extractIssueDeveloperLogin } from "../extractors";

const columns = ["review", "done", "merged", "annotated"];

function isOrphan(issue) {
  const column = extractIssueColumn(issue);
  if (!columns.includes(column)) return false;

  const developer = extractIssueDeveloperLogin(issue);
  if (developer) return false;

  return true;
}

export const listOrphanIssues = createWeakSelector(state =>
  listIssues(state).filter(isOrphan)
);
