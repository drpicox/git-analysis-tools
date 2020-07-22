import makeWeakReporter from "../../../lib/makeWeakReporter";

/**
 * @typedef {Object} DiffStats
 * @property {number} addedLines
 * @property {number} removedLines
 * @property {number} deltaLines
 * @property {number} addedFiles
 * @property {number} removedFiles
 * @property {number} deltaFiles
 * @property {number} totalMass
 * @property {number} totalFiles
 */

/**
 * @param {Array<import('../').FileDiff>} diff
 * @returns {DiffStats}
 */
export const extractDiffStats = makeWeakReporter(diff => {
  let addedLines = 0;
  let removedLines = 0;
  let addedFiles = 0;
  let removedFiles = 0;
  let totalMass = 0;

  for (let i = 0; i < diff.length; i += 1) {
    /**
     * @type {import('../').FileDiff>}
     */
    const fileDiff = diff[i];
    fileDiff.addedLines = +fileDiff.addedLines;
    fileDiff.removedLines = +fileDiff.removedLines;

    addedLines += fileDiff.addedLines;
    removedLines += fileDiff.removedLines;

    const mass = fileDiff.blame.length;
    totalMass += mass;

    if (fileDiff.isAddedFile) addedFiles += 1;
    if (fileDiff.isRemovedFile) removedFiles += 1;
  }

  const deltaLines = addedLines - removedLines;
  const deltaFiles = addedFiles - removedFiles;

  return {
    addedLines,
    removedLines,
    deltaLines,
    addedFiles,
    removedFiles,
    deltaFiles,
    totalMass,
    totalFiles: diff.length
  };
});
