import React from "react";
import { Table } from "react-bootstrap";
import { LinkUser, LinkIssue, ReviewIssueBadge } from "./";
import commatize from "../lib/commatize";

function LinkIssues({ issues }) {
  return (
    <>
      {commatize(issues, i => (
        <LinkIssue issue={i} key={i.url} />
      ))}
    </>
  );
}

function UserRow({ user }) {
  return (
    <tr>
      <td>
        <LinkUser login={user.login}></LinkUser>
      </td>
      <td>
        <LinkIssues issues={user.issues} />
      </td>
      <td>
        <LinkIssues issues={user.develops} />
      </td>
      <td>
        <LinkIssues issues={user.merges} />
      </td>
      <td>
        {user.reviews.map(r => (
          <ReviewIssueBadge review={r} key={r.url} />
        ))}
      </td>
    </tr>
  );
}

export function UsersList({ users }) {
  return (
    <div>
      <Table responsive hover striped>
        <thead>
          <tr className="table-info">
            <td>User</td>
            <td>Issues</td>
            <td>Develops</td>
            <td>Merges</td>
            <td>Reviews</td>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <UserRow key={u.login} user={u} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
