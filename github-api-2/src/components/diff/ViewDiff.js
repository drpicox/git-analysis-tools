import React from "react";
import ReactJson from "react-json-view";
import { extractDiffStats } from "../../ducks";
import useToggle from "../../lib/useToggle";
import { Table, Button } from "react-bootstrap";

const RIGHT = { textAlign: "right" };
/**
 * @param {{fileDiff: import('../../ducks').FileDiff}} param0
 */
function ViewFileDiff({ fileDiff }) {
  const [showBlame, toggleBlame] = useToggle();
  return (
    <>
      <tr>
        <td>
          {(fileDiff.isAddedFile && "+") ||
            (fileDiff.isRemovedFile && "-") ||
            " "}
        </td>
        <td>{fileDiff.fileName}</td>
        <td style={RIGHT}>{fileDiff.addedLines}</td>
        <td style={RIGHT}>{fileDiff.removedLines}</td>
        <td style={RIGHT}>{fileDiff.blame.length}</td>
        <td>
          <Button onClick={toggleBlame} variant="link">
            b
          </Button>
        </td>
      </tr>
      {showBlame && (
        <tr>
          <td colSpan={6}>
            <pre>{JSON.stringify(fileDiff.blame, null, 2)}</pre>
          </td>
        </tr>
      )}
    </>
  );
}

/**
 * @param {{diff: Array<import('../../ducks').FileDiff>}} param0
 */
function ViewFilesDiff({ diff }) {
  return (
    <Table responsive hover striped>
      <thead>
        <tr>
          <td> </td>
          <td>Name</td>
          <td style={RIGHT}>Add</td>
          <td style={RIGHT}>Rem</td>
          <td style={RIGHT}>#</td>
          <td> </td>
        </tr>
      </thead>
      <tbody>
        {diff.map(fileDiff => (
          <ViewFileDiff fileDiff={fileDiff} key={fileDiff.fileName} />
        ))}
      </tbody>
    </Table>
  );
}

/**
 * @param {{diff: Array<import('../../ducks').FileDiff>}} param0
 */
export function ViewDiff({ diff }) {
  const stats = extractDiffStats(diff);
  const [showFiles, toggleFiles] = useToggle();
  return (
    <div>
      <strong>Lines</strong>: ∆{stats.deltaLines} ({stats.addedLines} -{" "}
      {stats.removedLines})<br />
      <strong>Files</strong>: ∆{stats.deltaFiles} ({stats.addedFiles} -{" "}
      {stats.removedFiles})<br />
      <ReactJson src={stats} collapsed />
      <Button onClick={toggleFiles} variant="link">
        details
      </Button>
      {showFiles && <ViewFilesDiff diff={diff} />}
    </div>
  );
}
