import { createWeakSelector } from "../../createWeakSelector";
import { listIssues } from "./listIssues";
import { extractIssuePull } from "../extractors";

export const listDupPRIssues = createWeakSelector(state => {
  const issues = listIssues(state);
  const prCounts = {};

  const tuplas = issues
    .map(issue => {
      const pull = extractIssuePull(issue);
      if (!pull) return undefined;

      return {
        issue,
        key: `${issue.repository.name}#${pull.number}`
      };
    })
    .filter(Boolean);

  tuplas.forEach(t => {
    prCounts[t.key] = 1 + (prCounts[t.key] || 0);
  });

  return tuplas
    .filter(t => prCounts[t.key] > 1)
    .map(t => t.issue)
    .sort((a, b) => {
      if (a.repository.name < b.repository.name) return -1;
      if (a.repository.name > b.repository.name) return +1;

      const prA = extractIssuePull(a);
      const prB = extractIssuePull(a);
      if (prA.number !== prB.number) return prA.number - prB.number;

      return a.number - b.number;
    });
});
