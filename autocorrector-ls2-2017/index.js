// https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/

import { readJson, writeJson, readPatch } from "./api/index";
import { normalize } from "./normalize";
import { build } from "./models/build";
import { sum } from "./util/sum";
import { ScoreByWeeksAndUsers } from "./reports/ScoreByWeeksAndUsers";
import { CurlPullsPatches } from "./reports/CurlPullsPatches";
import { RepoScores } from "./reports/RepoScores";
import { ScoresWithAndWithoutBaseDevelop } from "./reports/ScoresWithAndWithoutBaseDevelop";
import { readPatches } from "./commads/readPatches";
import { buildHistory } from "./histories/buildHistory";

// const repos = ["LS2-Austin", "LS2-Boston", "LS2-Chicago", "LS2-Dallas"];
const repos = ["LS2-Chicago"];

async function main() {
  const raw = await readJson("raw.json");

  const start = Date.now();
  //const state = normalize(raw);
  //console.log(getRepoIssuesScore(state, { repo: "LS2-Chicago" }));
  //console.log(getRepoPullsScore(state, { repo: "LS2-Chicago" }));
  const repos = build(raw);
  repos.forEach(repo => {
    // const report1 = new ScoreByWeeksAndUsers(repo);
    // console.log(report1.getReport());
    // const report3 = new RepoScores(repo);
    // console.log(report3.getReport());
    // const report2 = new CurlPullsPatches(repo);
    // console.log(report2.getReport());
    // const report4 = new ScoresWithAndWithoutBaseDevelop(repo);
    // console.log(report4.getReport());
  });
  const stop = Date.now();
  console.log("Elapsed time: ", (stop - start) / 1000, "s.");

  // writeJson("state.json", state);

  // const issuesAndRepos = await getAll(repos);
  // writeJson("./raw.json", issuesAndRepos);
}

async function parsePatches() {
  const raw = await readJson("patches.json");

  const start = Date.now();
  const repoName = "LS2-Chicago";
  const commits = raw[repoName];
  commits.sort((a, b) => new Date(a.date) - new Date(b.date));
  console.log(buildHistory(repoName, commits));
  const stop = Date.now();
  console.log("Elapsed time: ", (stop - start) / 1000, "s.");
}

async function convertPatches() {
  const raw = await readJson("raw.json");

  const start = Date.now();
  const repos = build(raw);
  const result = {};
  for (let repo of repos) {
    result[repo.name] = await readPatches(repo);
  }
  const stop = Date.now();
  console.log("Elapsed time: ", (stop - start) / 1000, "s.");
  await writeJson("patches.json", result);
}

async function test() {
  const start = Date.now();
  console.log(readPatch("patches/LS2-Boston_13.patch"));
  const stop = Date.now();
  console.log("Elapsed time: ", (stop - start) / 1000, "s.");
}

parsePatches().catch(e => console.error(e));
