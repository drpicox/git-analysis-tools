import fetchRepoIssues from "../../../fetchRepoIssues";
import { extractIssueIsRemoved } from "../extractors";
import { removeIssues } from "./removeIssues";

function normalizeLogin(user) {
  const l = user.login.toLowerCase();
  if (l === "davidvolart") user.login = "dvolart";
  if (l === "espelletac") user.login = "cespelleta";
  user.login = user.login.toLowerCase();
}
function normalizeIssueLogin(issue) {
  normalizeLogin(issue.author);
  issue.userContentEdits.nodes.map(x => x.editor).forEach(normalizeLogin);
  issue.timelineItems.nodes
    .map(x => x.actor)
    .filter(Boolean)
    .forEach(normalizeLogin);
  issue.timelineItems.nodes
    .map(x => x.source && x.source.author)
    .filter(Boolean)
    .forEach(normalizeLogin);
  issue.timelineItems.nodes
    .flatMap(
      x => (x.source && x.source.reviews && x.source.reviews.nodes) || []
    )
    .map(x => x.author)
    .filter(Boolean)
    .forEach(normalizeLogin);
  issue.timelineItems.nodes
    .map(x => x.source && x.source.mergedBy)
    .filter(Boolean)
    .forEach(normalizeLogin);
}

export function loadIssues(name) {
  return async (dispatch, getState) => {
    const now = Date.now();
    const response = await fetchRepoIssues("TC-LS2", name);
    const issues = response.data.repository.issues.nodes.filter(
      i => !extractIssueIsRemoved(i)
    );
    issues.forEach(i => {
      i.repository.loadedAt = now;
      normalizeIssueLogin(i);
    });
    dispatch(removeIssues(name));
    dispatch({ type: "ADD_ISSUES", issues });
  };
}
