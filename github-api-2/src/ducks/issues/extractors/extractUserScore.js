import makeWeakReporter from "../../../lib/makeWeakReporter";
import ScoreUser from "../../../scores/ScoreUser";
import { extractUserWeeks } from "./";

/**
 * @type {(userWeeks: any) => ScoreUser}
 */
export const extractUserScore = makeWeakReporter(userWeeks => {
  if (!userWeeks._isWeeks) userWeeks = extractUserWeeks(userWeeks);

  const result = new ScoreUser(userWeeks);
  result.score();
  return result;
});
