import { listIssues } from "./listIssues";
import { createWeakSelector } from "../../createWeakSelector";

export const getFirstIssue = createWeakSelector(state => listIssues(state)[0]);
