import makeWeakReporter from "./makeWeakReporter";

const descendingNumbers = (a, b) => b - a;

export default makeWeakReporter(issue => {
  if (!issue) return 0;

  const weight =
    issue.labels.nodes
      .map(({ name }) => name)
      .filter(name => name.startsWith("weight-"))
      .map(name => +name.slice(7))
      .sort(descendingNumbers)[0] || 0;

  return weight;
});
