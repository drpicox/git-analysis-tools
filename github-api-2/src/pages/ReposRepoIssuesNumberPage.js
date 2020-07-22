import React from "react";
import { css } from "emotion";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { Container, ListGroup, Button } from "react-bootstrap";
import ReactJson from "react-json-view";
import useSelect from "../lib/useSelect";
import useToggle from "../lib/useToggle";
import useReselect from "../lib/useReselect";
import {
  getIssue,
  extractIssueAuthorLogin,
  extractIssueScore,
  makeGetNextIssue,
  makeGetPrevIssue,
  extractIssuePull,
  extractIssueDeveloperLogin,
  extractIssueIsMerged,
  extractIssueMergedByLogin,
  extractIssueReviews,
  extractIssueRejectionCount,
  extractIssueCommitSha,
  getCommitRelativeCoverage,
  getIssueBySha
} from "../ducks";
import {
  LinkIssue,
  LinkPull,
  ReviewBadge,
  IssueScoreDetail,
  LinkUser,
  ViewDiff
} from "../components";

function prettyIssue(issue) {
  return `${issue.repository.name.split("-").slice("-1")[0]}#${issue.number}`;
}

/**
 * @param {number} po
 * @returns {string}
 */
function toPct(po) {
  return `${(po * 100).toFixed(0)}%`;
}

export function ReposRepoIssuesNumberPage({ match }) {
  const { name, number } = match.params;
  const issue = useSelect(getIssue, name, number);
  const nextIssue = useReselect(makeGetNextIssue, issue);
  const prevIssue = useReselect(makeGetPrevIssue, issue);
  const [showScoreDetail, toggleScoreDetail] = useToggle();
  const sha = extractIssueCommitSha(issue);
  /**
   * @type {import('../ducks').CommitRelativeCoverage}
   */
  const coverage = useSelect(getCommitRelativeCoverage, sha);
  const pull = extractIssuePull(issue);
  const prevDevelopedIssue = useSelect(
    getIssueBySha,
    coverage && coverage.prev && coverage.prev.sha
  );
  if (!issue) return `No issue ${name}#${number}`;
  const scoreIssue = extractIssueScore(issue);

  const nav = (
    <>
      {"< "}
      {!prevIssue && <Link to="/issues">List</Link>}
      {prevIssue && <LinkIssue issue={prevIssue} pre="Prev: " />}
      {prevIssue && nextIssue && ", "}
      {` [${prettyIssue(issue)}] `}
      {nextIssue && <LinkIssue issue={nextIssue} pre="Next: " />}
      {" >"}
      <br />
    </>
  );

  return (
    <Container>
      {nav}
      <br />
      <ReactJson src={issue} collapsed />
      <ReactJson src={pull} collapsed />
      <ReactJson src={coverage} collapsed />
      <ReactJson src={scoreIssue} collapsed />
      <ListGroup>
        <ListGroup.Item active>
          <strong>Issue</strong>: #{issue.number}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Github</strong>:{" "}
          <a href={issue.url} target="_blank" rel="noopener noreferrer">
            {issue.url}
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Author</strong>:{" "}
          <LinkUser login={extractIssueAuthorLogin(issue)} />
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Score</strong>: {scoreIssue.score()}{" "}
          <Button onClick={toggleScoreDetail} variant="link">
            details
          </Button>
          {showScoreDetail && <IssueScoreDetail scoreIssue={scoreIssue} />}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Title</strong>: {issue.title}
        </ListGroup.Item>
        {pull && (
          <>
            <ListGroup.Item active className={css(`a { color: inherit }`)}>
              <strong>Pull request</strong>: <LinkPull pull={pull}></LinkPull>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Developer</strong>:{" "}
              <LinkUser login={extractIssueDeveloperLogin(issue)}></LinkUser>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Reviews</strong>:{" "}
              {extractIssueReviews(issue).map((r, i) => (
                <ReviewBadge review={r} key={i} />
              ))}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Rejection count</strong>:{" "}
              {extractIssueRejectionCount(issue)}
            </ListGroup.Item>
          </>
        )}
        {extractIssueIsMerged(issue) && (
          <>
            <ListGroup.Item active>
              <strong>Merged</strong>: yes
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Merged by</strong>:{" "}
              <LinkUser login={extractIssueMergedByLogin(issue)}></LinkUser>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Merged at</strong>: {pull.mergedAt}
            </ListGroup.Item>

            {/* done */}
            <ListGroup.Item>
              <strong>Merge commit</strong>: {extractIssueCommitSha(issue)}
            </ListGroup.Item>
          </>
        )}
        {coverage && (
          <>
            <ListGroup.Item active>Tests</ListGroup.Item>
            <ListGroup.Item>
              <strong>Prev</strong>: <LinkIssue issue={prevDevelopedIssue} />{" "}
              {coverage.prev.sha || "Initial Commit"}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Java</strong>: {coverage.java.passed}/
              {coverage.java.total} ({coverage.current.java.passed}-
              {coverage.prev.java.passed}/{coverage.current.java.total}-
              {coverage.prev.java.total})
            </ListGroup.Item>{" "}
            <ListGroup.Item>
              <strong>Javascript</strong>: {coverage.js.passed}/
              {coverage.js.total} ({coverage.current.js.passed}-
              {coverage.prev.js.passed}/{coverage.current.js.total}-
              {coverage.prev.js.total})
            </ListGroup.Item>
            <ListGroup.Item active>
              Coverage:{" "}
              {toPct(
                0.25 *
                  (coverage.java.lines +
                    coverage.java.branches +
                    coverage.js.lines +
                    coverage.js.branches)
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Java</strong>: {toPct(coverage.java.lines)},{" "}
              {toPct(coverage.java.branches)}
              <br />
              Lines Found: {coverage.current.java.lines.found} -{" "}
              {coverage.prev.java.lines.found}
              <br />
              Lines Hit: {coverage.current.java.lines.hit} -{" "}
              {coverage.prev.java.lines.hit}
              <br />
              Branches Found: {coverage.current.java.branches.found} -{" "}
              {coverage.prev.java.branches.found}
              <br />
              Branches Hit: {coverage.current.java.branches.hit} -{" "}
              {coverage.prev.java.branches.hit}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Javascript</strong>: {toPct(coverage.js.lines)},{" "}
              {toPct(coverage.js.branches)}
              <br />
              Lines Found: {coverage.current.js.lines.found} -{" "}
              {coverage.prev.js.lines.found}
              <br />
              Lines Hit: {coverage.current.js.lines.hit} -{" "}
              {coverage.prev.js.lines.hit}
              <br />
              Branches Found: {coverage.current.js.branches.found} -{" "}
              {coverage.prev.js.branches.found}
              <br />
              Branches Hit: {coverage.current.js.branches.hit} -{" "}
              {coverage.prev.js.branches.hit}
            </ListGroup.Item>
            <ListGroup.Item active>Diff</ListGroup.Item>
            <ListGroup.Item>
              <ViewDiff diff={coverage.current.diff} />
            </ListGroup.Item>
          </>
        )}
      </ListGroup>
      <br />
      <ReactMarkdown source={issue.body} escapeHtml={false} />
      <br></br>
      {nav}
    </Container>
  );
}
