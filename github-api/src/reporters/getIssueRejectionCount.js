import makeWeakReporter from "./makeWeakReporter";
import getIssueColumnMovements from "./getIssueColumnMovements";

export default makeWeakReporter(issue => {
  const movements = getIssueColumnMovements(issue);
  return movements.filter(
    ({ from, to }) => from === "review" && to === "develop"
  ).length;
});
