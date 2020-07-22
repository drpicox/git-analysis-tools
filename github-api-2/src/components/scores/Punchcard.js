import React, { useMemo } from "react";
import { Table } from "react-bootstrap";
import { css } from "emotion";
import { PunchcardUser } from "./PunchcardUser";

const td = css`
  td {
    padding: 0 0.2em;
  }
`;

/**
 * @param {{scores: Array<import("../../ducks").UserScore>}} param0
 */
export function Punchcard({ scores }) {
  return useMemo(() => {
    return (
      <Table className={td} responsive>
        <thead>
          <tr>
            <td></td>
            <td>S</td>
            <td>Alias</td>
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
              <PunchcardUser score={score} />
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }, [scores]);
}
