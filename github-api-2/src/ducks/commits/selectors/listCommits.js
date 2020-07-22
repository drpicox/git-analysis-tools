import { createWeakSelector } from "../../createWeakSelector";
import { getCommits } from "./getCommits";

/**
 * @type {(state: any) => Array<import('./').Commit>}
 */
export const listCommits = createWeakSelector(state =>
  Object.values(getCommits(state))
);
