import { createWeakSelector } from "../../createWeakSelector";
import { listIssues } from "./listIssues";
import { extractIssueMerge } from "../extractors";

/** @type {(any, login:string) => any} */
export const listUserMergedIssues = createWeakSelector(
  login => login,
  (state, login) =>
    listIssues(state).filter(
      i => extractIssueMerge(i) && extractIssueMerge(i).merger === login
    )
);
