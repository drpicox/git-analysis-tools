import React from "react";
import { connect } from "react-redux";
import { getCurrentRepoIssues } from "../ducks/repoIssues";

import getIssuesUsers from "../reporters/getIssuesUsers";
import getUserWeight from "../reporters/getUserWeight";
import getUserMergedWeight from "../reporters/getUserMergedWeight";
import getUserSelfServedCount from "../reporters/getUserSelfServedCount";
import getUserIssuesScore from "../reporters/getUserIssuesScore";
import getUserRejectionCount from "../reporters/getUserRejectionCount";
import getUserReviewRejectCount from "../reporters/getUserReviewRejectCount";

const ViewUser = ({ user, className }) => (
  <tr className={className}>
    <td>{user.login}</td>
    <td>{user.issues.length}</td>
    <td>{getUserIssuesScore(user)}</td>
    <td>{getUserSelfServedCount(user)}</td>
    <td>{user.develops.length}</td>
    <td>{getUserWeight(user)}</td>
    <td>{getUserMergedWeight(user)}</td>
    <td>{getUserRejectionCount(user)}</td>
    <td>{user.reviews.length}</td>
    <td>{getUserReviewRejectCount(user)}</td>
    <td>{user.merges.length}</td>
  </tr>
);
const ViewUsers = ({ users = [] }) => (
  <table>
    <thead>
      <tr>
        <td>user</td>
        <td colSpan={2}>issues</td>
        <td colSpan={5}>develops</td>
        <td colSpan={2}>reviews</td>
        <td colSpan={1}>merges</td>
      </tr>
      <tr>
        <td>whoami</td>
        <td>#issues</td>
        <td>score</td>
        <td>#self</td>
        <td>#devs</td>
        <td>W</td>
        <td>W.M.</td>
        <td>Rejects</td>
        <td>#revs</td>
        <td>rrejects</td>
        <td>#merges</td>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => (
        <ViewUser
          user={user}
          key={user.number}
          className={index % 2 ? "odd" : "even"}
        />
      ))}
    </tbody>
  </table>
);

export default connect(state => ({
  users: getIssuesUsers(getCurrentRepoIssues(state))
}))(ViewUsers);
