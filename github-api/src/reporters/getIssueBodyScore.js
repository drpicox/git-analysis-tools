import makeWeakReporter from "./makeWeakReporter";
import getIssueBodyEdit from "./getIssueBodyEdit";

export default makeWeakReporter(issue => {
  const { body } = getIssueBodyEdit(issue);
  const wordCount = body.split(/\s*/g).length;

  return wordCount;
});
