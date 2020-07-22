const Git = require("nodegit");
const makeWeakQuery = require("./makeWeakQuery");
const getPathType = require("./getPathType");
const getTimeWeek = require("./getTimeWeek");

const blameHunk = async (path, hunk, repo, blames) => {
  const lines = hunk.linesInHunk();
  const signature = hunk.origSignature();
  const author = `${signature.name()} <${signature.email()}>`;
  const time = signature.when().time() * 1000;
  const sha = hunk.origCommitId().tostrS();
  const type = getPathType(path);
  const week = getTimeWeek(time);

  blames.push({ author, sha, time, week, type, path, lines });
};

const blameEntry = async (entry, repo, blames) => {
  if (entry.isTree()) return blameTree(await entry.getTree(), repo, blames);

  const path = entry.path();
  const blame = await Git.Blame.file(repo, path);
  const hunks = blame.getHunkCount();
  for (let hunkIndex = 0; hunkIndex < hunks; hunkIndex += 1) {
    const hunk = blame.getHunkByIndex(hunkIndex);
    await blameHunk(path, hunk, repo, blames);
  }
  blame.free();
};

const blameTree = async (tree, repo, blames) => {
  const entries = tree.entries();

  for (let index = 0; index < entries.length; index += 1) {
    const entry = entries[index];
    await blameEntry(entry, repo, blames);
  }
};

async function fetchRepoBlame(repo, branchName = "HEAD") {
  const commit = await repo.getBranchCommit(branchName);
  const tree = await commit.getTree();
  const blames = [];

  await blameTree(tree, repo, blames);
  return blames;
}

module.exports = makeWeakQuery(fetchRepoBlame);
