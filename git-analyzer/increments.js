const Git = require("nodegit");

const toCsv = require("./src/queries/toCsv");
const fetchRepoIncrements = require("./src/queries/fetchRepoIncrements");

async function main() {
  const repo = await Git.Repository.open(process.env.REPO || "./sample");
  const increments = await fetchRepoIncrements(repo);
  console.log(toCsv(increments));
}

(async () => {
  try {
    await main();
  } catch (e) {
    console.error(e);
  }
})();
