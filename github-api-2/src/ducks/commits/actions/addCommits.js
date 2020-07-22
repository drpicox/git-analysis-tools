export const ADD_COMMITS = "commits/ADD_COMMITS";

/**
 * @param {Array<import('../').Commit>} commits
 */
export const addCommits = commits => ({
  type: ADD_COMMITS,
  commits
});
