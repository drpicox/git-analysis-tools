export function removeIssues(repo) {
  return {
    type: "REMOVE_ISSUES",
    repo
  };
}
