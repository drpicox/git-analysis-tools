import { createWeakSelector } from "../../createWeakSelector";
import { listIssues } from "./listIssues";
import { extractIssueDeveloperLogin } from "../extractors";

/** @type {(any, login:string) => any} */
export const listUserDevelopedIssues = createWeakSelector(
  login => login,
  (state, login) =>
    listIssues(state).filter(i => extractIssueDeveloperLogin(i) === login)
);
