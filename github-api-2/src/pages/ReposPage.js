import React from "react";
import { css } from "emotion";
import { Container, ListGroup, Row, Col, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import useDispatch from "../lib/useDispatch";
import useSelect from "../lib/useSelect";
import {
  listRepoIssues,
  loadIssues,
  saveIssues,
  listRepositories
} from "../ducks";

function LoadRepository({ repository }) {
  const { name, homepageUrl, loadedAt } = repository;
  const issues = useSelect(listRepoIssues, name);
  const load = useDispatch(loadIssues, name);

  return (
    <ListGroup.Item>
      <Row>
        <Col>
          <span>{loadedAt && moment(loadedAt).format("MM/DD hh:mm")}</span>{" "}
          <Link to={`/repos/${name}`}>{name}</Link>{" "}
          <Badge variant={issues.length ? "info" : "danger"}>
            {issues.length}
          </Badge>{" "}
          <a
            href={`https://github.com/tc-ls2/${name}/projects/1`}
            target="_blank"
            rel="noopener noreferrer"
          >
            See Project &#x2197;
          </a>{" "}
          <a href={homepageUrl} target="_blank" rel="noopener noreferrer">
            See Release &#x2197;
          </a>
        </Col>
        <Col md={4} className={css("text-align: right")}>
          <Button onClick={load}>Load</Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export function ReposPage() {
  const repositories = useSelect(listRepositories);
  const clear = useDispatch(() => ({ type: "REMOVE_ISSUES" }));
  const save = useDispatch(saveIssues);

  return (
    <Container>
      <Link to={`/repos/${repositories[0]}`}>First »</Link>
      <br />
      <br />
      {repositories.map(repository => (
        <LoadRepository repository={repository} key={repository.name} />
      ))}
      <br />
      <Button onClick={save}>Save</Button>{" "}
      <Button onClick={clear} variant="light">
        Clear
      </Button>
    </Container>
  );
}
