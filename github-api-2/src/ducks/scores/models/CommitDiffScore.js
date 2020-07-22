export class CommitDiffScore {
  /**
   * @param {import('../../').Commit} commit
   */
  constructor(commit, sourceRegExp, testRegExp) {
    this.commit = commit;
    this.date = new Date(commit.mergedAt);
    this.sources = this._computeSources(sourceRegExp);
    this.tests = this._computeTests(testRegExp);
    this.score = this._computeScore();
  }

  _computeSources(sourceRegExp) {
    const { diff } = this.commit;
    if (!diff) return [];

    return diff.filter(f => f.fileName.match(sourceRegExp) && f.addedLines);
  }

  _computeTests(testRegExp) {
    const { diff } = this.commit;
    if (!diff) return [];

    return diff.filter(f => f.fileName.match(testRegExp) && f.addedLines);
  }

  _computeScore() {
    const { diff } = this.commit;
    if (!diff) return 0;

    const sources = this.sources;
    const tests = this.tests;

    let result = 0;
    if (sources.length >= 1) result += 3;
    if (tests.length >= 1) result += 3;
    if (sources.filter(f => f.isAddedFile).length >= 1) result += 3;
    if (tests.filter(f => f.isAddedFile).length >= 1) result += 3;

    return Math.min(1, result / 10);
  }
}
