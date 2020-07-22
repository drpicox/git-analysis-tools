const fetchRepoHistory = require("./fetchRepoHistory");
const fetchCommitIncrements = require("./fetchCommitIncrements");
const makeWeakQuery = require("./makeWeakQuery");
const asyncForEach = require("./asyncForEach");

async function fetchRepoIncrements(repo) {
  const commits = await fetchRepoHistory(repo);
  const increments = [];

  await asyncForEach(commits, async commit => {
    const newIncrements = await fetchCommitIncrements(commit);
    increments.push(...newIncrements);
  });

  return increments;
}

module.exports = makeWeakQuery(fetchRepoIncrements);
