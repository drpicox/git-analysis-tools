const fetchCommitHistory = require("./fetchCommitHistory");
const makeWeakQuery = require("./makeWeakQuery");

async function fetchRepoHistory(repo, branchName = "master") {
  const commit = await repo.getBranchCommit(branchName);
  return fetchCommitHistory(commit);
}

module.exports = makeWeakQuery(fetchRepoHistory);
