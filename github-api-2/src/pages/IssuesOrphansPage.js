import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import useSelect from "../lib/useSelect";
import { IssuesList } from "../components";
import { listOrphanIssues } from "../ducks";

export function IssuesOrphansPage() {
  const issues = useSelect(listOrphanIssues);

  return (
    <>
      <Container>
        <Link to="/issues/duppr">« DupPR Issues</Link>
        <span> | [Orphan Issues] | </span>
        <Link to="/issues">All Issues »</Link>
      </Container>
      <br />

      <IssuesList issues={issues} />
    </>
  );
}
