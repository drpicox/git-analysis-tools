import { createWeakSelector } from "../../createWeakSelector";

/**
 * @type {(state:any, sha:string) => import('./').Commit}
 */
export const getCommit = createWeakSelector(
  sha => sha,
  (state, sha) => state.commits[sha]
);
