import { extractIssuesMerges, listIssues } from "../issues";
import { addCommits, fetchCoverage } from "./actions";

export const commitsMiddleware = store => next => action => {
  next(action);

  switch (action.type) {
    case "ADD_ISSUES": {
      const issues = listIssues(store.getState());

      const commits = extractIssuesMerges(issues);

      store.dispatch(addCommits(commits));
      store.dispatch(fetchCoverage());
      break;
    }

    default:
  }
};
