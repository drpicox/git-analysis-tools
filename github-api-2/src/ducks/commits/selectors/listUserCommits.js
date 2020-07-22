import { listCommits } from "./listCommits";
import { createWeakSelector } from "../../createWeakSelector";

/**
 * @type {(state: any, login: string) => Array<import('./').Commit>}
 */
export const listUserCommits = createWeakSelector(
  login => login,
  (state, login) => listCommits(state).filter(c => c.developer === login)
);
