import makeWeakReporter from "../../../lib/makeWeakReporter";
import ScoreIssue from "../../../scores/ScoreIssue";

/**
 * @type {(issue: any) => ScoreIssue}
 */
export const extractIssueScore = makeWeakReporter(issue => {
  const result = new ScoreIssue(issue);
  result.score();
  return result;
});
