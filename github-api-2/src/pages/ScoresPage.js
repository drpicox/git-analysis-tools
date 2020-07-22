import React from "react";
import useSelect from "../lib/useSelect";
import { Punchcard } from "../components";
import { listUsersScores } from "../ducks";

export function ScoresPage() {
  const scores = useSelect(listUsersScores);
  return (
    <>
      <Punchcard scores={scores} />
    </>
  );
}
