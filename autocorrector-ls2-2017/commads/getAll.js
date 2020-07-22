import { get } from "../api";

export async function getAll(repos) {
  const tree = {};

  repos.forEach(repo => {
    tree[repo] = {};
  });

  repos.forEach(repo => {
    tree[repo].issues = get(
      `https://api.github.com/repos/TC-LabSoft2/${repo}/issues?state=all`
    );
  });

  repos.forEach(repo => {
    tree[repo].pulls = get(
      `https://api.github.com/repos/TC-LabSoft2/${repo}/pulls?state=all`
    );
  });

  for (const i in repos) {
    const repo = repos[i];
    tree[repo].issues = await tree[repo].issues;
    tree[repo].pulls = await tree[repo].pulls;
  }

  return tree;
}
