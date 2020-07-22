import { createWeakSelector } from "../../createWeakSelector";
import { listIssues } from "./listIssues";

export const listRepoIssues = createWeakSelector(
  name => name,
  (state, name) => {
    const issues = listIssues(state);
    return issues.filter(i => i.repository.name === name);
  }
);
