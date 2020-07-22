const fetchRepoHistory = require("./fetchRepoHistory");
const makeWeakQuery = require("./makeWeakQuery");
const asyncForEach = require("./asyncForEach");

async function fetchRepoUsers(repo) {
  const commits = await fetchRepoHistory(repo);

  const users = {};
  const getUser = name => (users[name] = users[name] || { name });

  await asyncForEach(commits, async commit => {
    const name = commit.author().toString();
    getUser(name);
  });

  return Object.values(users);
}

module.exports = makeWeakQuery(fetchRepoUsers);
