import React from "react";

export function LinkPull({ pull }) {
  if (!pull) return null;

  return (
    <a href={pull.url} target="_blank" rel="noopener noreferrer">
      #{pull.number}
    </a>
  );
}
