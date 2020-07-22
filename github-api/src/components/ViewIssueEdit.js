import React from "react";
import Markdown from "react-markdown";
import { connect } from "react-redux";
import NavButton from "./NavButton";
import RefNum from "./RefNum";
import { getCurrentRepoIssues } from "../ducks/repoIssues";
import getIssuesEdits from "../reporters/getIssuesEdits";

const EditsNav = ({ edits, index }) => {
  const hasPrev = index > 0;
  const hasNext = index < edits.length - 1;

  return (
    <div>
      <NavButton
        view={{ main: "issueEdit", index: index - 1 }}
        disabled={!hasPrev}
      >
        « Prev
      </NavButton>{" "}
      <NavButton
        view={{ main: "issueEdit", index: index + 1 }}
        disabled={!hasNext}
      >
        Next »
      </NavButton>{" "}
      ({index + 1} / {edits.length})
    </div>
  );
};

const IssueEdit = ({ edits, index: anIndex }) => {
  if (!edits || edits.lenght === 0) return <div>loading?</div>;

  const index = Math.max(0, Math.min(edits.length - 1, anIndex));
  const current = edits[index];
  const { author, weight, title, body } = current;

  return (
    <div>
      <EditsNav edits={edits} index={index} />
      <div>
        <RefNum {...current} />({weight}pt) by <strong>{author}</strong> {title}
      </div>
      <hr />
      <div style={{ maxWidth: "35em", margin: "auto" }}>
        <Markdown source={body} escapeHtml={false} />
      </div>
      <hr />
      <EditsNav edits={edits} index={index} />
    </div>
  );
};

export default connect((state, { index }) => ({
  index,
  edits: getIssuesEdits(getCurrentRepoIssues(state))
}))(IssueEdit);
