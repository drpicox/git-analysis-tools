import React from "react";
import { Table } from "react-bootstrap";
import useSelect from "../lib/useSelect";
import { listUsersScores } from "../ducks";

function byLogin(a, b) {
  if (a.login < b.login) return -1;
  if (a.login > b.login) return +1;
  return 0;
}

export function ScoresTablePage() {
  const scores = useSelect(listUsersScores);
  scores.sort(byLogin);

  return (
    <Table responsive>
      <thead>
        <tr>
          <td>User</td>
          <td>S</td>
          <td>Issues</td>
          <td>Develops</td>
          <td>Reviews</td>
          <td>Cov.</td>
          <td>Merges</td>
          <td>Front</td>
          <td>Back</td>
        </tr>
      </thead>
      <tbody>
        {scores.map(score => (
          <tr key={score.login}>
            <td>{score.login}</td>
            <td>{score.rawScore * 10}</td>
            <td>{score.partials.issues.score * 10}</td>
            <td>{score.partials.develops.score * 10}</td>
            <td>{score.partials.reviews.score * 10}</td>
            <td>{score.partials.coverages.score * 10}</td>
            <td>{score.partials.merges.score * 10}</td>
            <td>{score.partials.front.score * 10}</td>
            <td>{score.partials.back.score * 10}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
