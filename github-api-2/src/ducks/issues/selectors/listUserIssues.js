import { createWeakSelector } from "../../createWeakSelector";
import { listIssues } from "./listIssues";

/** @type {(any, login:string) => any} */
export const listUserIssues = createWeakSelector(
  login => login,
  (state, login) => listIssues(state).filter(i => i.author.login === login)
);
