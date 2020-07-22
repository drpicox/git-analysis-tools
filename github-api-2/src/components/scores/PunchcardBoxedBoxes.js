import React, { useMemo } from "react";
import { PunchcardBoxes } from "./PunchcardBoxes";
import { LinkUser } from "../LinkUser";
import { PunchcardBox } from "./PunchcardBox";

const style = { display: "flex" };

/**
 * @param {{partial: {score:number; boxes: Array<{score: number}>}, zero?: number}} param0
 */
export function PunchcardBoxedBoxes({ partial, zero }) {
  return useMemo(
    () => (
      <span style={style}>
        <PunchcardBox score={partial.score * 10} zero={1} />
        &nbsp;
        <PunchcardBoxes
          scores={partial.boxes.map(b => b.score * 10)}
          zero={zero}
        />
      </span>
    ),
    [partial, zero]
  );
}
