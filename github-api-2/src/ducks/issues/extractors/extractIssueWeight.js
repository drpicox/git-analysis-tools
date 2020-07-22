import makeWeakReporter from "../../../lib/makeWeakReporter";

const descendingNumbers = (a, b) => b - a;

export const extractIssueWeight = makeWeakReporter(issue => {
  if (!issue || !issue.labels) return 0;

  const weight =
    issue.labels.nodes
      .map(({ name }) => name)
      .filter(name => name.startsWith("weight-"))
      .map(name => +name.slice(7))
      .sort(descendingNumbers)[0] || 0;

  return weight;
});
