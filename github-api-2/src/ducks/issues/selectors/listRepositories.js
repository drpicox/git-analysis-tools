import { createWeakSelector } from "../../createWeakSelector";
import { listIssues } from "./listIssues";
import repositories from "../../../repositories";

export const listRepositories = createWeakSelector(state => {
  const issues = listIssues(state);
  return repositories.map(
    name => issues.map(i => i.repository).find(r => r.name === name) || { name }
  );
});
