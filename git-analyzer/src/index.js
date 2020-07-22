const readText = require("./io/readText");
const parseGitLogPatches = require("./utils/parseGitLogPatches");
const processPatches = require("./utils/processPatches");
const Parser = require("./utils/Parser");
const Repo = require("./repo/Repo");

(async () => {
  try {
    await main();
  } catch (e) {
    console.log(e);
  }
})();

async function main() {
  const patches = await readText("./sample.git-log-p");
  processPatches(patches, {
    onCommit: console.log,
    onAuthor: console.log,
    onDate: console.log,
    onFileDeleted: x => console.log("~~~~~ deleted ", x)
  });
  /*
  const rawCommits = parseGitLogPatches(patches);
  return console.log(JSON.stringify(rawCommits, null, 2));
  const repo = new Repo();
  repo.processRawCommits(rawCommits);
  */
  /*

  rawCommits.forEach(addAuthor);
  rawCommits.forEach(addCommit);
  console.log(repo);

  function addAuthor({ author }) {
    repo.addAuthor(author);
  }

  function addCommit({ hash, date, author, diff }) {
    console.log(diff[0].to);
    console.log(diff[0].chunks[0]);
  }
  */
}
