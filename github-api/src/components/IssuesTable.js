import React from "react";
import NavButton from "./NavButton";
import RefNum from "./RefNum";
import getIssueCommit from "../reporters/getIssueCommit";
import getIssueColumn from "../reporters/getIssueColumn";
import getIssueWeight from "../reporters/getIssueWeight";
import getIssueAuthor from "../reporters/getIssueAuthor";
import getIssueDeveloper from "../reporters/getIssueDeveloper";
import getIssueBodyScore from "../reporters/getIssueBodyScore";
import getIssuePullRequest from "../reporters/getIssuePullRequest";
import getIssueReview from "../reporters/getIssueReview";
import getIssueMergedBy from "../reporters/getIssueMergedBy";
import isIssueMerged from "../reporters/isIssueMerged";
import getIssueRejectionCount from "../reporters/getIssueRejectionCount";
import getIssueBodyEdit from "../reporters/getIssueBodyEdit";

const IssueRow = ({ issue, className }) => (
  <tr className={className}>
    <td>
      <RefNum {...issue} />
    </td>
    <td>{getIssueWeight(issue)}</td>
    <td>{getIssueAuthor(issue)}</td>
    <td>{issue.title}</td>
    <td>
      <NavButton view={{ main: "markdown", ...getIssueBodyEdit(issue) }}>
        {getIssueBodyScore(issue)}
      </NavButton>
    </td>
    <td>
      <RefNum {...getIssuePullRequest(issue)} />
    </td>
    <td>{getIssueDeveloper(issue)}</td>
    <td>{isIssueMerged(issue) && "merged"}</td>
    <td>{getIssueMergedBy(issue)}</td>
    <td>{getIssueReview(issue).state}</td>
    <td>{getIssueReview(issue).author}</td>
    <td>{getIssueRejectionCount(issue)}</td>
    <td>{getIssueColumn(issue)}</td>
    <td>{getIssueCommit(issue)}</td>
  </tr>
);
const IssueTable = ({ issues = [] }) => (
  <table>
    <thead>
      <tr>
        <td colSpan={5}>Issue</td>
        <td colSpan={2}>PR</td>
        <td colSpan={2}>Merge</td>
        <td colSpan={3}>Review</td>
        <td colSpan={2}>Other</td>
      </tr>
      <tr>
        <td>#is</td>
        <td>W</td>
        <td>Column</td>
        <td>Author</td>
        <td>Title</td>
        <td>Scre</td>
        <td>#pr</td>
        <td>Developer</td>
        <td>Merged</td>
        <td>Merged By</td>
        <td>State</td>
        <td>Reviewer</td>
        <td>RC</td>
        <td>Column</td>
        <td>Commit</td>
      </tr>
    </thead>
    <tbody>
      {issues.map((issue, index) => (
        <IssueRow
          issue={issue}
          key={issue.number}
          className={index % 2 ? "odd" : "even"}
        />
      ))}
    </tbody>
  </table>
);

export default IssueTable;
