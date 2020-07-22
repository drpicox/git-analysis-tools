import { Coder } from "./Coder";
import { File } from "./File";
import { History } from "./History";

export function buildHistory(repoName, rawCommits) {
  const history = new History(repoName);

  rawCommits.forEach(rawCommit => {
    const coder = buildCoder(history, rawCommit);

    buildDiffs(history, coder, rawCommit);
  });
  return history;
}

function buildCoder(history, rawCommit) {
  let coder = history.getCoder(rawCommit.user);
  if (!coder) {
    coder = new Coder(rawCommit.user);
    history.putCoder(coder);
  }
  return coder;
}

function buildDiff(history, coder, rawDiff) {
  const file = buildFile(history, rawDiff.from || rawDiff.to);
  if (rawDiff.from) {
    if (!rawDiff.to) {
      history.deleteFile(file);
    } else if (rawDiff.from !== rawDiff.to) {
      history.renameFile(rawDiff.from, rawDiff.to);
    }
  }
}

function buildDiffs(history, coder, rawCommit) {
  rawCommit.diffs.forEach(diff => buildDiff(history, coder, diff));
}

function buildFile(history, name) {
  let file = history.getFile(name);
  if (!file) {
    file = new File(name);
    history.putFile(file);
  }
  return file;
}
