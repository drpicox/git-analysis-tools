import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import useSelect from "../lib/useSelect";
import { IssuesList } from "../components";
import { listIssues } from "../ducks";

export function IssuesPage() {
  const issues = useSelect(listIssues);

  return (
    <>
      <Container>
        <Link to="/issues/orphans">« Orphan Issues</Link>
        <span> | [All Issues] | </span>
        <Link
          to={`/repos/${issues[0].repository.name}/issues/${issues[0].number}`}
        >
          First Issue »
        </Link>
      </Container>
      <br />

      <IssuesList issues={issues} />
    </>
  );
}
