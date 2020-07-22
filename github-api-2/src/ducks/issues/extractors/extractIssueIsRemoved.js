import makeWeakReporter from "../../../lib/makeWeakReporter";
import { extractIssueColumn } from "./";

export const extractIssueIsRemoved = makeWeakReporter(issue => {
  if (!issue) return true;
  if (!issue.closed) return false;

  const column = extractIssueColumn(issue);
  return column !== "done";
});
