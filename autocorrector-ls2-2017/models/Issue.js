export class Issue {
  constructor(raw) {
    this.number = raw.number;
    this.repo = null;
    this.labels = raw.labels.map(label => label.name);
  }

  getPullCount() {
    return this.getPulls().length;
  }

  getPulls() {
    if ("_pulls" in this) {
      return this._pulls;
    }

    this._pulls = this.repo.getPulls().filter(pull => pull.hasIssue(this));
    return this._pulls;
  }

  getScore() {
    if ("_score" in this) {
      return this._score;
    }

    this._score =
      this.labels
        .filter(name => /^score-(\d+)$/.test(name))
        .map(name => name.replace(/^score-(\d+)$/, "$1"))
        .map(score => +score)[0] || 0;

    return this._score;
  }

  setRepo(repo) {
    this.repo = repo;
  }
}
