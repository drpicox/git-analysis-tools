import React from "react";

const NODES = [
  "gray", // "#922D0E", //  "gray",
  "darkred", // "#EB5628", //  "darkred", // "darkred", // "#E4608D",
  "red", // "#F09236", //  "red", // "crimson", // "#E0588C",
  "orange", // "#F8D849", //  "red", // "#f76", // "#F27067",
  "orange", // "#FEFF55", //  "orange", // "orange", // "#FFC34C",
  "#a0d000", // "#78C2AD", //  "orange", // "DarkKhaki", // "#D8DA52",
  "green", // "#67CA4D", //  "green", // "#292", // "#8BC579",
  "green", // "#60B177", //  "green", // "darkgreen ", // "#5BA197",
  "blue", // "#56BCF9", //  "blue", // "CornflowerBlue", // "#74BA8C",
  "blue", // "#4A68DA", //  "blue", // "blue", // "#3089BE",
  "darkblue" // "#4A68DA" //  "darkblue" // "darkblue" // "#5A89C2"
].map(color => <span style={{ color }}>▣</span>);

/**
 * @param {{score: number, zero?: number}} param0
 */
export function PunchcardBox({ score, zero }) {
  return (
    <span title={`${score}`}>
      {
        NODES[
          Math.min(NODES.length - 1, Math.max(zero || 0, Math.floor(score)))
        ]
      }
    </span>
  );
}
