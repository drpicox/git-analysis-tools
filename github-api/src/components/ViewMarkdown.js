import React from "react";
import Markdown from "react-markdown";

const ViewMarkdown = ({ author, body }) => (
  <div>
    by <strong>{author}</strong>
    <br />
    <hr />
    <div style={{ maxWidth: "35em", margin: "auto" }}>
      <Markdown source={body} />
    </div>
  </div>
);
export default ViewMarkdown;
