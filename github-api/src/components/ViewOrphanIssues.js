import { connect } from "react-redux";
import IssuesTable from "./IssuesTable";
import { getCurrentRepoIssues } from "../ducks/repoIssues";
import isIssueOrphan from "../reporters/isIssueOrphan";

export default connect(state => ({
  issues: getCurrentRepoIssues(state)
    // .map(i => console.log(i) || i)
    .filter(issue => isIssueOrphan(issue))
}))(IssuesTable);
