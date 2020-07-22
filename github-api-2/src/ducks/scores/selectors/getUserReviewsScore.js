import { createWeakSelector } from "../../createWeakSelector";
import { listUserReviews } from "../../";
import { SprintsScore } from "../models";
import { extractIssueCommitSha } from "../../issues";
import { getCommit } from "../../commits";

function normalizeFileName(fileName) {
  return fileName
    .split("/")
    .slice(-1)[0]
    .split(".")[0]
    .toLowerCase()
    .replace(/[^a-z]/g, "");
}

export class UserReviewScore {
  /**
   * @param {{ createdAt: string | number | Date; }} review
   * @param {import("../../").Commit} commit
   */
  constructor(review, commit) {
    this.review = review;
    this.date = new Date(review.createdAt);
    this.commit = commit;
    this.addedFiles = this._computeAddedFiles();
    this.blogFile = this._computeBlogFile();
    this.javaTestFile = this._computeJavaTestFile();
    this.jsTestFile = this._computeJsTestFile();
    this.namesMatch = this._computeNamesMatch();
    this.score = this._computeScore();
  }

  _computeAddedFiles() {
    return ((this.commit && this.commit.diff) || []).filter(d => d.isAddedFile);
  }

  _computeBlogFile() {
    return this.addedFiles.find(f =>
      f.fileName.startsWith("src/main/resources/blog/")
    );
  }

  _computeJavaTestFile() {
    const blogName = this.blogFile && normalizeFileName(this.blogFile.fileName);
    const javaTests = this.addedFiles.filter(f =>
      f.fileName.match(/^src\/test\/java\/com\/drpicox\/game\/[^/]+.java$/)
    );

    return (
      javaTests.find(f => normalizeFileName(f.fileName) === blogName) ||
      javaTests[0]
    );
  }

  _computeJsTestFile() {
    const blogName = this.blogFile && normalizeFileName(this.blogFile.fileName);
    const jsTests = this.addedFiles.filter(f =>
      f.fileName.match(/^src\/www\/__test__\/[^/]+.jsx?$/)
    );

    return (
      jsTests.find(f => normalizeFileName(f.fileName) === blogName) ||
      jsTests[0]
    );
  }

  _computeNamesMatch() {
    if (!this.blogFile || !this.javaTestFile || !this.jsTestFile) return false;

    const blogName = normalizeFileName(this.blogFile.fileName);
    const javaName = normalizeFileName(this.javaTestFile.fileName).replace(
      /test$/,
      ""
    );
    const jsName = normalizeFileName(this.jsTestFile.fileName);

    return blogName === javaName && javaName === jsName;
  }

  _computeScore() {
    let result = 0;

    if (this.blogFile) result += 0.2;
    if (this.javaTestFile) result += 0.15;
    if (this.jsTestFile) result += 0.15;
    if (this.namesMatch) result += 0.3;

    const APPROVED = this.review.state === "APPROVED";
    if (!APPROVED && this.commit && this.commit.diff) result = 0.8 - result;

    return result + 0.2;
  }
}

export class UserReviewsScore {
  /**
   * @param {string} login
   * @param {SprintsScore} sprints
   */
  constructor(login, sprints) {
    this.login = login;
    this.sprints = sprints;
    this.boxes = this.sprints.sprints;
    this.score = this.sprints.score;
  }
}

/** @type {(any, login:string) => UserReviewsScore} */
export const getUserReviewsScore = createWeakSelector(
  login => login,
  (state, login) => {
    const reviews = listUserReviews(state, login).map(review => {
      const sha = extractIssueCommitSha(review.issue);
      const commit = getCommit(state, sha);
      return new UserReviewScore(review, commit);
    });
    const sprints = new SprintsScore(reviews);

    return new UserReviewsScore(login, sprints);
  }
);
