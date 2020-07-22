import makeWeakReporter from "./makeWeakReporter";
import getIssueBodyEdit from "./getIssueBodyEdit";

export default makeWeakReporter(issue => {
  const { author } = getIssueBodyEdit(issue);
  return author;
});
