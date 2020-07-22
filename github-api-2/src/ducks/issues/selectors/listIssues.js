import { getIssues } from "./getIssues";
import { extractIssueColumn } from "../extractors";
import { createWeakSelector } from "../../createWeakSelector";

const columns = [
  "todo",
  "backlog",
  "develop",
  "review",
  "done",
  "merged",
  "annotated",
  "none"
];

function compareIssues(i1, i2) {
  const c1 = columns.indexOf(extractIssueColumn(i1));
  const c2 = columns.indexOf(extractIssueColumn(i2));
  if (c1 !== c2) return c1 - c2;

  const r1 = i1.repository.name;
  const r2 = i2.repository.name;
  if (r1 < r2) return -1;
  if (r1 > r2) return +1;

  return i1.number - i2.number;
}

export const listIssues = createWeakSelector(state => {
  const issues = getIssues(state);
  return Object.values(issues).sort(compareIssues);
});
