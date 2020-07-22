import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import useSelect from "../lib/useSelect";
import { IssuesList } from "../components";
import { listDupPRIssues } from "../ducks";

export function IssuesDupPRPage() {
  const issues = useSelect(listDupPRIssues);

  return (
    <>
      <Container>
        <span>[DupPR Issues] | </span>
        <Link to="/issues/orphans">Orphan Issues »</Link>
      </Container>
      <br />

      <IssuesList issues={issues} />
    </>
  );
}
