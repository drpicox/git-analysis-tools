import { getCurrentRepo, SET_CURRENT_REPO } from "./currentRepo";
import fetchRepoIssues from "../fetchRepoIssues";

export const SET_REPO_ISSUES = "SET_REPO_ISSUES";
export const setRepoIssues = (repo, issues) => ({
  type: SET_REPO_ISSUES,
  repo,
  issues
});

export const getRepoIssues = (state, { repo }) => state.repoIssues[repo];

export const getCurrentRepoIssues = state =>
  getRepoIssues(state, { repo: getCurrentRepo(state) });

export default (state = {}, action) => {
  switch (action.type) {
    case SET_REPO_ISSUES: {
      const { repo, issues } = action;
      return { ...state, [repo]: issues };
    }
    default:
      return state;
  }
};

export const middleware = ({ getState, dispatch }) => next => async action => {
  next(action);

  switch (action.type) {
    case SET_CURRENT_REPO: {
      const { repo } = action;
      const savedIssues = getRepoIssues(getState(), { repo });
      if (!savedIssues) {
        const response = await fetchRepoIssues("TC-LS2", repo);
        dispatch(setRepoIssues(repo, response.data.repository.issues.nodes));
      }
      break;
    }
    default: // nothing
  }
};
