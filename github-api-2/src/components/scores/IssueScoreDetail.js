import React from "react";
import { Table } from "react-bootstrap";

const NO_MARGIN = { margin: 0 };

/**
 * @param {{scoreIssue: import('../../scores/ScoreIssue').default}} param0
 */
export function IssueScoreDetail({ scoreIssue }) {
  return (
    <Table>
      <thead>
        <tr>
          <td>Score</td>
          <td>type</td>
          <td>count</td>
          <td>partial</td>
          <td>text</td>
        </tr>
      </thead>
      <tbody>
        {scoreIssue.scoreLines().map((d, idx) => (
          <tr key={idx}>
            <td>{d.score().toFixed(1)}</td>
            <td>{d.type()}</td>
            <td>{d.count(d.type())}</td>
            <td>{d.partialScore(d.type())}</td>
            <td>
              <pre style={NO_MARGIN}>{d._line.slice(0, 70)}</pre>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
