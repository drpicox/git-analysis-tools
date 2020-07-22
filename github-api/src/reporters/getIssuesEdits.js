import makeWeakReporter from "./makeWeakReporter";
import getIssueBodyScore from "./getIssueBodyScore";
import getIssueBodyEdit from "./getIssueBodyEdit";
import getIssueWeight from "./getIssueWeight";
import getIssueColumn from "./getIssueColumn";

export default makeWeakReporter(issues => {
  if (!issues) return issues;

  // const counts = {};

  return (
    issues
      .filter(issue => getIssueColumn(issue) !== "nothing")
      .map(issue => ({
        number: issue.number,
        url: issue.url,
        title: issue.title,
        weight: getIssueWeight(issue),
        ...getIssueBodyEdit(issue),
        score: getIssueBodyScore(issue)
      }))
      .filter(({ score }) => score >= 100)
      .filter(({ weight }) => weight > 1)
      .filter(({ author }) => author !== "drpicox" && author !== "nobody")
      .sort(() => (Math.random() < 0.5 ? -1 : 1))
      /*
    .filter(({ author }) => {
      const count = (counts[author] || 0) + 1;
      counts[author] = count;
      return count <= 4;
    })
    */
      .sort((a, b) => {
        if (a.author < b.author) return -1;
        if (a.author > b.author) return 1;

        return a.number - b.number;
      })
  );
});
