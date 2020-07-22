const makeWeakQuery = require("./makeWeakQuery");
const asyncForEach = require("./asyncForEach");
const getPathType = require("./getPathType");
const getTimeWeek = require("./getTimeWeek");

async function fetchCommitIncrements(commit) {
  const increments = [];
  const sha = commit.sha().toString();
  const author = commit.author().toString();
  const time = commit.timeMs();
  const week = getTimeWeek(time);

  await asyncForEach(commit.getDiff(), async diff => {
    await asyncForEach(diff.patches(), async patch => {
      const path = patch.newFile().path();
      const stats = patch.lineStats();
      const type = getPathType(patch.newFile().path());
      increments.push({
        author,
        sha,
        time,
        week,
        type,
        path,
        filesAdded: patch.isAdded() ? 1 : 0,
        filesDeleted: patch.isDeleted() ? 1 : 0,
        linesAdded: stats.total_additions,
        linesDeleted: stats.total_deletions
      });
    });
  });

  return increments;
}

module.exports = makeWeakQuery(fetchCommitIncrements);
