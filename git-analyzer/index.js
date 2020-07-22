// require('./src');
const Git = require("nodegit");

const toCsv = require("./src/queries/toCsv");
const fetchRepoUsers = require("./src/queries/fetchRepoUsers");
const fetchRepoIncrements = require("./src/queries/fetchRepoIncrements");
const fetchRepoBlame = require("./src/queries/fetchRepoBlame");
const fetchCommitIncrements = require("./src/queries/fetchCommitIncrements");

/*
async function reportCiStats(commit) {
  return {
    sha: commit.sha(),
    date: commit.date().getTime(),
    author: commit.author().toString()
  };
}

async function reportHistoryStats(history) {
  return await Promise.all(history.map(reportCiStats));
}

async function forEach(array, fn) {
  return Promise.all((await array).map(fn));
}

async function reportCi(ci) {
  const x = [
    { filesAdded: 0, filesDeleted: 0, linesAdded: 0, linesDeleted: 0 }
  ];

  await forEach(ci.getDiff(), async diff => {
    await forEach(diff.patches(), async patch => {
      const isAdded = patch.isAdded();
      const isDeleted = patch.isDeleted();
      const {
        total_additions: linesAdded,
        total_deletions: linesDeleted
      } = patch.lineStats();
      x.push({ isAdded, isDeleted, linesAdded, linesDeleted });
    });
  });
  return x;
}
*/

async function main() {
  const repo = await Git.Repository.open(process.env.REPO || "./sample");
  const increments = await fetchRepoIncrements(repo);
  console.log(toCsv(increments));

  console.log("-".repeat(60));
  const blames = await fetchRepoBlame(repo);
  console.log(toCsv(blames));

  // const ci = await repo.getBranchCommit("master");
  // const incrs = await fetchCommitIncrements(ci);
  // console.log(incrs);

  //const users = await fetchRepoUsers(repo);
  //console.log(users);

  /*
  console.log(ci.message());
  console.log((await (await ci.getDiff())[0].patches())[0].lineStats());

  console.log(await reportCi(ci));

  const history = await getHistory(ci);
  history.forEach(hc => console.log(hc.sha()));
  history.forEach(hc => console.log(hc.date().getTime()));
  history.forEach(hc => console.log(hc.author().toString()));

  const reports = await reportHistoryStats(history);
  reports.forEach(console.log);
  */
}

(async () => {
  try {
    await main();
  } catch (e) {
    console.error(e);
  }
})();
