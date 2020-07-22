import { sum } from "../util/sum";

export class User {
  constructor(raw) {
    this.login = raw.login;
    this.repo = null;
    this.pulls = [];
  }

  addPull(pull) {
    this.pulls.push(pull);
    pull.setUser(this);
  }

  getPulls() {
    return this.pulls;
  }

  getScore() {
    if ("_score" in this) {
      return this._score;
    }

    this._score = sum(
      this.pulls.filter(pull => pull.isMerged()).map(pull => pull.getScore())
    );
    return this._score;
  }

  setRepo(repo) {
    this.repo = repo;
  }
}
