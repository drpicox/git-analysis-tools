import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // react-router v4/v5
import useSelect from "../lib/useSelect";
import { listDupPRIssues, listOrphanIssues } from "../ducks";

const WARNING = (
  <span
    style={{ color: "red", fontSize: "150%" }}
    role="img"
    aria-label="warning"
  >
    {"⚠️ "}
  </span>
);

export const HomePage = () => {
  const dups = useSelect(listDupPRIssues);
  const orphans = useSelect(listOrphanIssues);

  return (
    <Container>
      <h1>Main reports</h1>
      <ul>
        <li>
          <Link to="/carousel">Carousel</Link>
        </li>
        <li>
          <Link to="/scores">Scores</Link>
          <Link to="/scores-table">(-)</Link>
        </li>
        <li>
          <Link to="/repos">Repos</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/issues">Issues</Link>
        </li>
        <li>
          {(dups.length && WARNING) || null}
          <Link to="/issues/duppr">Duplicated PR Issues</Link>
        </li>
        <li>
          {(orphans.length && WARNING) || null}
          <Link to="/issues/orphans">Orphan Issues</Link>
        </li>
      </ul>
    </Container>
  );
};
