import * as localForage from "localforage";
import { listCommitMissingCoverage } from "../selectors";
import { fillCommits } from "./fillCommits";

async function get(url) {
  const req = await fetch(`/api${url}`);
  return await req.json();
}

function key(commit) {
  const { sha, previousSha } = commit;
  return sha + "#" + previousSha;
}

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let fetching = false;

export const FETCH_COVERAGE = "commits/FETCH_COVERAGE";
export const fetchCoverage = () => async (dispatch, getState) => {
  try {
    console.log("START FETCHING?", { fetching });
    if (fetching) return;
    fetching = true;
    const commits = [];

    let next = null;
    let list = listCommitMissingCoverage(getState())
      .slice()
      .reverse();
    console.log({ fetching, list });
    while (list.length) {
      next = list.pop();
      const saved = await localForage.getItem(key(next));
      if (saved && saved.js && saved.diff && saved.java) commits.push(saved);
      else break;
      saved.developer = saved.developer.toLowerCase();
      next = null;
      await delay(50);
    }

    if (commits.length) {
      dispatch(fillCommits(commits));
    }
    if (!next) return;

    const { sha, previousSha, repo } = next;

    try {
      await get(`/fetch/${repo.split("-").slice(-1)[0]}`);
    } catch (e) {}
    const { diff } = await get(`/diff/${previousSha}/${sha}`);
    const { js, java } = await get(`/coverage/${sha}`);

    const newCommit = { ...next, diff, js, java };
    await localForage.setItem(key(next), newCommit);
    dispatch(fillCommits([newCommit]));
  } finally {
    console.log("STOP FETCHING");
    fetching = false;
  }

  await delay(500);
  dispatch(fetchCoverage());
};
