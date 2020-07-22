import { createWeakSelector } from "../../createWeakSelector";

export const getIssues = createWeakSelector(state => state.issues);
