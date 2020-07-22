import { createWeakSelector } from "../../createWeakSelector";
import { listRepositories } from "./listRepositories";

export const getRepositories = createWeakSelector(state => {
  const repositories = listRepositories(state);
  const result = {};
  repositories.forEach(r => {
    result[r.name] = r;
  });
  return result;
});
