import { createWeakSelector } from "../../createWeakSelector";
import { listIssues } from "./listIssues";
import { extractIssueReviews } from "../extractors";

/** @type {(any, login:string) => any} */
export const listUserReviews = createWeakSelector(
  login => login,
  (state, login) =>
    listIssues(state)
      .map(issue => {
        const authoredReviews = extractIssueReviews(issue).filter(
          r => r.author === login
        );

        return (
          authoredReviews.filter(r => r.state === "APPROVED").slice(-1)[0] ||
          authoredReviews.slice(-1)[0]
        );
      })
      .filter(Boolean)
);
