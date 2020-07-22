import makeWeakReporter from "./makeWeakReporter";

export default makeWeakReporter(issue => {
  if (!issue) return null;

  const pulls = issue.timelineItems.nodes
    .filter(({ __typename }) => __typename === "CrossReferencedEvent")
    .map(({ source }) => source)
    .filter(({ __typename }) => __typename === "PullRequest");

  return pulls[pulls.length - 1];
});
