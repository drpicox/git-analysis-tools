import makeWeakReporter from "./makeWeakReporter";

export default makeWeakReporter(issue => {
  if (!issue) return "nothing";

  const node = issue.projectCards.nodes[0];
  if (!node) return "nothing";

  return node.column.name.toLowerCase();
});
