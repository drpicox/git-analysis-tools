import { connect } from "react-redux";
import IssuesTable from "./IssuesTable";
import { getCurrentRepoIssues } from "../ducks/repoIssues";

export default connect(state => ({ issues: getCurrentRepoIssues(state) }))(
  IssuesTable
);
