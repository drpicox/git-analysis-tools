import { createWeakSelector } from "../../createWeakSelector";

/**
 * @typedef {Object} Coverage
 * @property {number} found
 * @property {number} hit
 */

/**
 * @typedef {Object} TestResult
 * @property {number} total
 * @property {number} passed
 * @property {Coverage} lines
 * @property {Coverage} branches
 */

/**
 * @typedef {Object} RelativeCoverage
 * @property {number} total
 * @property {number} passed
 * @property {number} lines
 * @property {number} branches
 */

/**
 * @typedef {Object} CommitRelativeCoverage
 * @property {boolean} isSuccess
 * @property {RelativeCoverage} java
 * @property {RelativeCoverage} js
 * @property {Commit} current
 * @property {Commit} prev
 */

/**
 * @typedef {Object} LineBlame
 * @property {string} sha
 * @property {string} email
 * @property {Date} ts
 * @property {string} text
 */

/**
 * @typedef {Object} FileDiff
 * @property {number} addedLines
 * @property {number} removedLines
 * @property {boolean} isAddedFile
 * @property {boolean} isRemovedFile
 * @property {string} fileName
 * @property {Array<LineBlame>} blame
 */

//
/**
 * @typedef {Object} Commit
 * @property {TestResult=} java
 * @property {TestResult=} js
 * @property {Array<FileDiff>=} diff
 * @property {string} repo
 * @property {string} sha
 * @property {string} previousSha
 * @property {Date} mergedAt
 * @property {string} developer
 * @property {string} merger
 * @property {Array<string>} approvals
 */

/**
 * @type {(any) => {[sha: string] : Commit}}
 */
export const getCommits = createWeakSelector(state => state.commits);
