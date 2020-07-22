import { readPatch } from "../api/index";

export async function readPatches(repo) {
  const commits = {};
  for (let pull of repo.getPulls()) {
    const filename = `patches/${repo.name}_${pull.number}.patch`;
    const rawCommits = await readPatch(filename);
    rawCommits.forEach(commit => {
      commit.diffs.forEach(diff => {
        diff.chunks.forEach(
          chunk =>
            (chunk.changes = chunk.changes.filter(change => !change.normal))
        );
        diff.chunks = diff.chunks.filter(chunk => chunk.changes.length);
      });
      commit.diffs = commit.diffs.filter(
        diff => diff.chunks.length && diff.from !== diff.to
      );
      commit.diffs = commit.diffs.filter(diff => {
        if (!/\.(js|java)$/.test(diff.from)) diff.from = "";
        if (!/\.(js|java)$/.test(diff.to)) diff.to = "";
        return diff.from || diff.to;
      });
      commits[commit.sha] = commit;
    });
  }
  return Object.values(commits);
}
