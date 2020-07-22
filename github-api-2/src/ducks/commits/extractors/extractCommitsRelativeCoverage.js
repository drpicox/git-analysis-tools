import makeWeakReporter from "../../../lib/makeWeakReporter";

export const extractCommitsRelativeCoverage = makeWeakReporter(
  /**
   * @param {{[sha:string]: import('../').Commit}} commits
   * @returns {{[sha:string]: import('../').CommitRelativeCoverage}}
   */
  commits => {
    /**
     * @param {import('../').Commit} commit
     * @returns {boolean}
     */
    function isFulfilled(commit) {
      if (!commit.previousSha) return true;

      return commit.java != null && commit.js != null;
    }

    /**
     * @param {import('../').Commit} commit
     * @returns {boolean}
     */
    function isSuccess(commit) {
      if (!commit.previousSha) return true;

      return (
        isFulfilled(commit) &&
        commit.java.passed > 0 &&
        commit.java.passed === commit.java.total &&
        commit.js.passed > 0 &&
        commit.js.passed === commit.js.total
      );
    }

    /**
     * @param {import('../').Coverage} current
     * @param {import('../').Coverage} prev
     * @returns {number}
     */
    function compareCoverage(current, prev) {
      const delta = {
        found: current.found - prev.found,
        hit: current.hit - prev.hit
      };

      if (delta.found > 0 && delta.hit <= delta.found) {
        return delta.hit / delta.found;
      }

      const excess = delta.found - delta.hit;
      const missingHit = prev.found - prev.hit;
      return 1 + excess / missingHit;
    }

    /**
     * @param {import('../').TestResult} current
     * @param {import('../').TestResult} prev
     * @returns {import('../').RelativeCoverage}
     */
    function extractRelativeCoverage(current, prev) {
      return {
        total: current.total - prev.total,
        passed: current.passed - prev.passed,
        lines: compareCoverage(current.lines, prev.lines),
        branches: compareCoverage(current.branches, prev.branches)
      };
    }

    /**
     * @param {import('../').Commit} current
     * @param {import('../').Commit} prev
     * @returns {import('../').CommitRelativeCoverage}
     */
    function extractCommitRelativeCoverage(current, prev) {
      return {
        isSuccess: isSuccess(current),
        java: extractRelativeCoverage(current.java, prev.java),
        js: extractRelativeCoverage(current.js, prev.js),
        current,
        prev
      };
    }

    /**
     * @param {import('../').Commit} commit
     * @returns {import('../').Commit}
     */
    function getPrevious(commit) {
      let { previousSha } = commit;

      let parent = commits[previousSha];
      while (!isSuccess(parent)) {
        parent = commits[parent.previousSha];
      }
      return parent;
    }

    /**
     * @type {{[sha:string]: import('../').CommitRelativeCoverage}}
     */
    const result = {};
    Object.keys(commits).forEach(sha => {
      const commit = commits[sha];
      if (!commit.previousSha) return;
      if (!isFulfilled(commit)) return;

      const prev = getPrevious(commit);
      const relativeCoverage = extractCommitRelativeCoverage(commit, prev);
      result[sha] = relativeCoverage;
    });

    return result;
  }
);
