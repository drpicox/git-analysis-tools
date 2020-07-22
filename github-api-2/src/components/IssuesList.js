import React from "react";
import { Table, Container } from "react-bootstrap";
import useSelect from "../lib/useSelect";
import {
  ColumnBadge,
  WeightBadge,
  ReviewBadge,
  LinkIssue,
  LinkUser,
  LinkPull
} from "../components";
import {
  extractIssueWeight,
  extractIssueColumn,
  extractIssueAuthorLogin,
  extractIssueScore,
  extractIssuePull,
  extractIssueDeveloperLogin,
  extractIssueIsMerged,
  extractIssueMergedByLogin,
  extractIssueReviews,
  extractIssueRejectionCount,
  extractIssueCommitSha,
  getCommitRelativeCoverage
} from "../ducks";
const WARNING = (
  <span
    style={{ color: "red", fontSize: "150%" }}
    role="img"
    aria-label="warning"
  >
    {"⚠️ "}
  </span>
);

/**
 * @param {number} po
 * @returns {string}
 */
function toPct(po) {
  return `${(po * 100).toFixed(0)}%`;
}

/**
 *
 * @param {{coverage: import('../ducks').CommitRelativeCoverage}} param0
 */
function Coverage({ coverage }) {
  if (!coverage) return <td colSpan={6} />;
  if (!coverage.java || !coverage.js) {
    return null;
  }
  if (!coverage.isSuccess)
    return (
      <>
        <td>
          {coverage.java.passed}/{coverage.java.total}
        </td>
        <td colSpan={2}>{WARNING}</td>
        <td>
          {coverage.js.passed}/{coverage.js.total}
        </td>
        <td colSpan={2}>{WARNING}</td>
      </>
    );

  return (
    <>
      <td>
        {coverage.java.passed}/{coverage.java.total}
      </td>
      <td>{toPct(coverage.java.lines)}</td>
      <td>{toPct(coverage.java.branches)}</td>
      <td>
        {coverage.js.passed}/{coverage.js.total}
      </td>
      <td>{toPct(coverage.js.lines)}</td>
      <td>{toPct(coverage.js.branches)}</td>
    </>
  );
}

function IssueRow({ issue }) {
  const sha = extractIssueCommitSha(issue);
  const coverage = useSelect(getCommitRelativeCoverage, sha);

  return (
    <tr>
      <td>
        <LinkIssue issue={issue}></LinkIssue>
      </td>
      <td>
        <WeightBadge weight={extractIssueWeight(issue)}></WeightBadge>
      </td>
      <td>
        <ColumnBadge column={extractIssueColumn(issue)}></ColumnBadge>
      </td>
      <td>
        <LinkUser login={extractIssueAuthorLogin(issue)}></LinkUser>
      </td>
      <td>{issue.title}</td>
      <td>
        {extractIssueScore(issue)
          .score()
          .toFixed(1)}
      </td>

      {/* develop */}
      <td>
        <LinkPull pull={extractIssuePull(issue)}></LinkPull>
      </td>
      <td>
        <LinkUser login={extractIssueDeveloperLogin(issue)}></LinkUser>
      </td>

      {/* review */}
      <td>
        {extractIssueReviews(issue).map((r, i) => (
          <ReviewBadge review={r} key={i} />
        ))}
      </td>
      <td>{extractIssueRejectionCount(issue)}</td>

      {/* merge */}
      <td>{extractIssueIsMerged(issue) ? "yes" : null}</td>
      <td>
        <LinkUser login={extractIssueMergedByLogin(issue)}></LinkUser>
      </td>

      {/* done */}
      <td>{sha}</td>

      {/* coverage */}
      <Coverage coverage={coverage} />
    </tr>
  );
}

export function IssuesList({ issues }) {
  if (!issues || !issues.length)
    return (
      <Container>
        <p>No issues</p>
      </Container>
    );

  return (
    <div>
      <Table responsive hover striped>
        <thead>
          <tr className="table-info">
            <td colSpan={6}>Issue</td>
            <td colSpan={2}>PR</td>
            <td colSpan={2}>Review</td>
            <td colSpan={2}>Merge</td>
            <td colSpan={1}>Done</td>
            <td colSpan={6}>Coverage</td>
          </tr>
          <tr className="table-info">
            <td>#</td>
            <td>W</td>
            <td>Column</td>
            <td>Author</td>
            <td style={{ minWidth: "20em" }}>Title</td>
            <td>S</td>
            <td>#</td>
            <td>Developer</td>
            <td>Reviews</td>
            <td>RC</td>
            <td>Merged</td>
            <td>Merged By</td>
            <td>Commit</td>
            <td>Jv Test</td>
            <td>Jv Lines</td>
            <td>Jv Branches</td>
            <td>Js Test</td>
            <td>Js Lines</td>
            <td>Js Branches</td>
          </tr>
        </thead>
        <tbody>
          {issues.map(i => (
            <IssueRow
              key={i.url
                .split("/")
                .splice(-3)
                .join("#")}
              issue={i}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
