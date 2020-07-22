import makeWeakReporter from "../../../lib/makeWeakReporter";

export const extractIssueColumn = makeWeakReporter(issue => {
  if (!issue) return "none";

  const node = issue.projectCards.nodes[0];
  if (!node || !node.column) return "none";

  return node.column.name.toLowerCase();
});
