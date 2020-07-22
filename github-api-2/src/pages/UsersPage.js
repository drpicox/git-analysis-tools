import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import useSelect from "../lib/useSelect";
import { UsersList } from "../components";
import { listUsers } from "../ducks";
import { getAliasForLogin } from "../students";

export function UsersPage() {
  const users = useSelect(listUsers);

  return (
    <>
      <Container>
        <Link to={`/scores`}>« Scores</Link>
        {" |"} [List] {"| "}
        <Link to={`/users/${getAliasForLogin(users[0].login)}`}>First »</Link>
        <br />
        <br />
      </Container>
      <UsersList users={users} />;
    </>
  );
}
