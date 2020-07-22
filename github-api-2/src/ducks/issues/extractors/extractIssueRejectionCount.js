import makeWeakReporter from "../../../lib/makeWeakReporter";
import { extractIssueColumnMovements } from "./";

export const extractIssueRejectionCount = makeWeakReporter(issue => {
  const movements = extractIssueColumnMovements(issue);
  return movements.filter(
    ({ from, to }) => from === "review" && to === "develop"
  ).length;
});
