import React, { useMemo } from "react";
import { PunchcardBoxedBoxes } from "./PunchcardBoxedBoxes";
import { LinkUser } from "../LinkUser";

const WARNING = (
  <span style={{ color: "red" }} role="img" aria-label="warning">
    {" ⚠️"}
  </span>
);

/**
 * @param {{score: import("../../ducks").UserScore}} param0
 */
export function PunchcardUser({ score }) {
  return useMemo(
    () => (
      <>
        <td>{score.warning && WARNING}</td>
        <td>{(score.score * 10).toFixed(2)}</td>
        <td>
          <LinkUser login={score.login}></LinkUser>
        </td>
        <td>
          <PunchcardBoxedBoxes partial={score.partials.issues} />
        </td>
        <td>
          <PunchcardBoxedBoxes partial={score.partials.develops} />
        </td>
        <td>
          <PunchcardBoxedBoxes partial={score.partials.reviews} />
        </td>
        <td>
          <PunchcardBoxedBoxes partial={score.partials.coverages} zero={1} />
        </td>
        <td>
          <PunchcardBoxedBoxes partial={score.partials.merges} zero={1} />
        </td>
        <td>
          <PunchcardBoxedBoxes partial={score.partials.front} />
        </td>
        <td>
          <PunchcardBoxedBoxes partial={score.partials.back} />
        </td>
      </>
    ),
    [score]
  );
}
