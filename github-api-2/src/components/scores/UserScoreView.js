import React from "react";
import { Table } from "react-bootstrap";

/**
 * @param {{scoreUser: import('../../scores/ScoreUser').default}} param0
 */
export default function UserScoreDetail({ scoreUser }) {
  return <div>{scoreUser.score()}</div>;
}
