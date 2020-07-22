import { createWeakSelector } from "../../createWeakSelector";
import { listIssues, listRepoIssues } from "../../issues";
import { getUserScore } from "./getUserScore";

const uniq = arr => [...new Set(arr)];

/** @type {(state:any, repo?:string) => import('./').UserScore[]} */
export const listUsersScores = createWeakSelector(
  repo => repo,
  (state, repo) => {
    const issues = repo ? listRepoIssues(state, repo) : listIssues(state);
    const logins = uniq(issues.map(i => i.author.login));
    return logins
      .map(login => getUserScore(state, login))
      .sort((a, b) => {
        if (!a.warning && b.warning) return -1;
        if (a.warning && !b.warning) return +1;
        if (a.score === b.score) return b.rawScore - a.rawScore;

        return b.score - a.score;
      });
  }
);
