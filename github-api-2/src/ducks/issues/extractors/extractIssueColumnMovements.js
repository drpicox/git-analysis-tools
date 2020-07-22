import makeWeakReporter from "../../../lib/makeWeakReporter";

export const extractIssueColumnMovements = makeWeakReporter(issue => {
  if (!issue) return [];

  const events = issue.timelineItems.nodes.filter(
    ({ __typename }) => __typename === "MovedColumnsInProjectEvent"
  );
  return events.map(({ previousProjectColumnName, projectColumnName }) => ({
    from: previousProjectColumnName.toLowerCase(),
    to: projectColumnName.toLowerCase()
  }));
});
