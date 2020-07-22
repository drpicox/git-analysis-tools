import { getIssues } from "./getIssues";
import { createWeakSelector } from "../../createWeakSelector";

export const getIssue = createWeakSelector(
  (repositoryName, number) => `${repositoryName}#${number}`,
  (state, repositoryName, number) =>
    getIssues(state)[`${repositoryName}#${number}`]
);
