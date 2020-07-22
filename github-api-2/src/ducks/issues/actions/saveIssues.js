import { listIssues } from "../selectors";

export function saveIssues() {
  return async (dispatch, getState) => {
    const issues = listIssues(getState());
    localStorage.setItem("issues", JSON.stringify(issues));
  };
}
