import React from "react";

const RefNum = ({ number, url }) =>
  (number && (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <strong>#{number}</strong>
    </a>
  )) ||
  null;

export default RefNum;
