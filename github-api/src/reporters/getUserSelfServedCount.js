import makeWeakReporter from "./makeWeakReporter";
import getIssueAuthor from "./getIssueAuthor";

export default makeWeakReporter(user => {
  if (!user) return 0;

  return user.develops.filter(issue => getIssueAuthor(issue) === user.login)
    .length;
});
