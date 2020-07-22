import ScoreUserIssues from "./ScoreUserIssues";
import ScoreUserDevelops from "./ScoreUserDevelops";
import ScoreUserReviews from "./ScoreUserReviews";
import ScoreUserMerges from "./ScoreUserMerges";
import { getAliasForLogin } from "../students";

export default class ScoreUser {
  constructor(userWeeks) {
    /** @type {number | undefined} */
    this._score = undefined;

    /** @type {string} */
    this._alias = getAliasForLogin(userWeeks.user.login);
    /** @type {{login:string}} */
    this._user = userWeeks.user;
    /** @type {ScoreUserIssues} */
    this._issues = new ScoreUserIssues(userWeeks.issues);
    /** @type {ScoreUserReviews} */
    this._reviews = new ScoreUserReviews(userWeeks.reviews);
    /** @type {ScoreUserDevelops} */
    this._develops = new ScoreUserDevelops(userWeeks.develops);
    /** @type {ScoreUserMerges} */
    this._merges = new ScoreUserMerges(userWeeks.merges);
  }

  /**
   * @returns {number}
   */
  score() {
    if (this._score != null) return this._score;

    return (this._score =
      (this._issues.score() +
        this._develops.score() +
        this._merges.score() +
        this._reviews.score()) /
      5);
  }
}
