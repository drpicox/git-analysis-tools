import { createWeakSelector } from "../../createWeakSelector";
import { listIssues } from "./listIssues";

export const getIssueCount = createWeakSelector(
  state => listIssues(state).length
);
