import { createWeakSelector } from "../../createWeakSelector";
import { getUserIssuesScore, getUserDevelopsScore } from "./";
import { getUserReviewsScore } from "./getUserReviewsScore";
import { getUserCoveragesScore } from "./getUserCoveragesScore";
import { getUserMergesScore } from "./getUserMergesScore";
import { getUserFrontScore } from "./getUserFrontScore";
import { getUserBackScore } from "./getUserBackScore";

const add = (a, b) => a + b;

/**
 * @typedef UserPartialsScore
 * @property {import("./").UserIssuesScore} issues
 * @property {import("./").UserDevelopsScore} develops
 * @property {import("./").UserReviewsScore} reviews
 * @property {import("./").UserCoveragesScore} coverages
 * @property {import("./").UserMergesScore} merges
 * @property {import("./").UserFrontScore} front
 * @property {import("./").UserBackScore} back
 */

export class UserScore {
  /**
   * @param {string} login
   * @param {UserPartialsScore} partials
   */
  constructor(login, partials) {
    this.login = login;
    this.partials = partials;
    this.minScore = this._computeMinScore();
    this.warning = this._computeWarning();
    this.rawScore = this._computeRawScore();
    this.score = this._computeScore();
  }

  _computeMinScore() {
    const scores = Object.values(this.partials).map(p => p.score * 0.8);
    return Math.min(...scores);
  }

  _computeWarning() {
    return Object.values(this.partials).some(p => p.score < 0.3);
  }

  _computeRawScore() {
    const partials = Object.values(this.partials);

    const weight = partials.map(p => p.weight || 1).reduce(add, 0);
    const totalScore = partials
      .map(p => p.score * (p.weight || 1))
      .reduce(add, 0);

    const gauss = this.warning ? 0.8 : 1.0;

    return (gauss * totalScore) / weight;
  }

  _computeScore() {
    return Math.min(1, this.rawScore);
  }
}

/** @type {(state:any, login:string) => UserScore} */
export const getUserScore = createWeakSelector(
  login => login,
  (state, login) => {
    const issues = getUserIssuesScore(state, login);
    const develops = getUserDevelopsScore(state, login);
    const reviews = getUserReviewsScore(state, login);
    const coverages = getUserCoveragesScore(state, login);
    const merges = getUserMergesScore(state, login);
    const front = getUserFrontScore(state, login);
    const back = getUserBackScore(state, login);

    return new UserScore(login, {
      issues,
      develops,
      reviews,
      coverages,
      merges,
      front,
      back
    });
  }
);
