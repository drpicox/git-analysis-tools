const git = require("./git");

async function diff(req, res) {
  const { from, to } = req.params;

  await git.checkout(from);
  const diff = await git.diffNumstat(to);
  await git.checkout(to);

  for (let index = 0; index < diff.length; index += 1) {
    const fileDiff = diff[index];
    const { fileName, addedLines, removedLines } = fileDiff;
    const blame = await git.blame(fileName);

    fileDiff.blame = blame || [];
    fileDiff.isAddedFile =
      blame != null && blame.length === addedLines && removedLines === 0;
    fileDiff.isRemovedFile =
      blame == null || (blame.length === removedLines && addedLines === 0);
  }

  res.json({ from, to, diff });
}

module.exports = diff;
