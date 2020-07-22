import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import ReactJson from "react-json-view";
import moment from "moment";
import useSelect from "../lib/useSelect";
import repositories from "../repositories";
import { IssuesList, Punchcard } from "../components";
import {
  getRepository,
  listRepoIssues,
  extractIssuesMerges,
  listUsersScores
} from "../ducks";

export function ReposRepoPage({ match }) {
  const { name } = match.params;
  const repository = useSelect(getRepository, name);
  const issues = useSelect(listRepoIssues, name);
  const scores = useSelect(listUsersScores, name);
  const index = useMemo(() => repositories.indexOf(name), [name]);
  const prev = repositories[index - 1];
  const next = repositories[index + 1];
  const merges = extractIssuesMerges(issues);

  return (
    <>
      <Container>
        <div>
          {!prev && <Link to="/repos">{"List"}</Link>}
          {prev && <Link to={`/repos/${prev}`}>« Prev</Link>}
          {next && " – "}
          {next && <Link to={`/repos/${next}`}>Next »</Link>}
        </div>
        <h2>{name}</h2>
        <p>
          <strong>Released: </strong>
          <a
            href={repository.homepageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {repository.homepageUrl} ↗
          </a>
          <br />
          <strong>Loaded at: </strong>
          {repository.loadedAt && moment(repository.loadedAt).format("LLLL")}.
        </p>
      </Container>
      <Container>
        <h2>Users</h2>
      </Container>
      <Punchcard scores={scores} />

      <Container>
        <h2>Merges</h2>
      </Container>
      <ReactJson src={merges} collapsed />

      <Container>
        <h2>Issues</h2>
      </Container>
      <IssuesList issues={issues} />
    </>
  );
}
