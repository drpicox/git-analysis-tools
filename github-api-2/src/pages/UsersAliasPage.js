import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import ReactJson from "react-json-view";
import { getLoginForAlias, getAliasForLogin } from "../students";
import useReselect from "../lib/useReselect";
import useSelect from "../lib/useSelect";
import {
  getUser,
  extractUserWeeks,
  getUsers,
  makeGetPrevUser,
  makeGetNextUser,
  getUserScore
} from "../ducks";
import { IssuesList, Punchcard, PunchcardUser } from "../components";

export function UsersAliasPage({ match }) {
  const { alias } = match.params;
  const login = getLoginForAlias(alias);
  const user = useSelect(getUser, login);
  const state = useSelect(state => state);
  const userScore = getUserScore(state, login);
  const userScores = useMemo(() => [userScore], [userScore]);
  const users = useSelect(getUsers, login);
  const prev = useReselect(makeGetPrevUser, user);
  const next = useReselect(makeGetNextUser, user);
  const reviews = useMemo(() => user && user.reviews.map(r => r.issue), [user]);
  if (!user) {
    console.log({ match, alias, login, user, users });
    return null;
  }

  return (
    <>
      <Container>
        <div>
          {!prev && <Link to="/users">« List</Link>}
          {prev && (
            <Link to={`/users/${getAliasForLogin(prev.login)}`}>« Prev</Link>
          )}
          {" |"} [{alias}] {next && "| "}
          {next && (
            <Link to={`/users/${getAliasForLogin(next.login)}`}>Next »</Link>
          )}
        </div>
        <h2>{alias}</h2>
        <ReactJson src={user} collapsed />
        <ReactJson src={userScore} collapsed />
        <h2>Score</h2>
        <Punchcard scores={userScores} />
      </Container>

      <Container>
        <h3>Issues</h3>
      </Container>
      <IssuesList issues={user.issues} />
      <Container>
        <h3>Develops</h3>
      </Container>
      <IssuesList issues={user.develops} />
      <Container>
        <h3>Merges</h3>
      </Container>
      <IssuesList issues={user.merges} />
      <Container>
        <h3>Reviews</h3>
      </Container>
      <IssuesList issues={reviews} />
    </>
  );
}
