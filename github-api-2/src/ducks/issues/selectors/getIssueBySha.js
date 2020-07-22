import { createWeakSelector } from "../../createWeakSelector";
import { getIssuesBySha } from "./getIssuesBySha";

export const getIssueBySha = createWeakSelector(
  sha => sha,
  (state, sha) => getIssuesBySha(state)[sha]
);
