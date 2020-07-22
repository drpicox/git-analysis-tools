import { sum } from "../util/sum";

export class Week {
  constructor(first) {
    this.first = new Date(first);
    this.last = new Date(first);
    this.last.setDate(7 + this.last.getDate());
    this.repo = null;
  }

  contains(date) {
    return this.first <= date && date < this.last;
  }

  containsPull(pull) {
    return this.contains(pull.getMergedAt());
  }

  getPulls() {
    if ("_pulls" in this) {
      return this._pulls;
    }

    this._pulls = this.repo.getPulls().filter(pull => this.containsPull(pull));
    return this._pulls;
  }

  getScore() {
    if ("_score" in this) {
      return this._score;
    }

    this._score = sum(this.getPulls().map(pull => pull.getScore()));
    return this._score;
  }

  setRepo(repo) {
    this.repo = repo;
  }

  toString() {
    return this.first.toISOString().slice(0, 10);
  }
}
