const Git = require("nodegit");

const toCsv = require("./src/queries/toCsv");
const fetchRepoBlame = require("./src/queries/fetchRepoBlame");

async function main() {
  const repo = await Git.Repository.open(process.env.REPO || "./sample");

  const blames = await fetchRepoBlame(repo);
  console.log(toCsv(blames));
}

(async () => {
  try {
    await main();
  } catch (e) {
    console.error(e);
  }
})();
