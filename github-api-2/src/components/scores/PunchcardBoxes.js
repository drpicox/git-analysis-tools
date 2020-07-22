import React from "react";
import { PunchcardBox } from "./PunchcardBox";

const style = {
  marginTop: ".3em",
  fontSize: "60%",
  lineHeight: "1"
};

/**
 * @param {{scores: Array<number>, zero?: number}} param0
 */
export function PunchcardBoxes({ scores, zero }) {
  const top = scores.filter((_, index) => index < scores.length / 2);
  const bottom = scores.filter((_, index) => index >= scores.length / 2);

  return (
    <div style={style}>
      <div>
        {top.map((s, i) => (
          <PunchcardBox score={s} key={i} zero={zero} />
        ))}
      </div>
      <div>
        {bottom.map((s, i) => (
          <PunchcardBox score={s} key={i} zero={zero} />
        ))}
      </div>
    </div>
  );
}
