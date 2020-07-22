import { sum } from "../util/sum";

export class Pull {
  constructor(raw) {
    this.number = raw.number;
    this.title = raw.title;
    this.body = raw.body;
    this.repo = null;
    this.user = null;
    this.mergedAt = raw.merged_at && new Date(raw.merged_at);
    this.diffUrl = raw.diff_url;
    this.patchUrl = raw.patch_url;
    this.baseRef = raw.base.ref;
  }

  getIssues() {
    if ("_issues" in this) {
      return this._issues;
    }

    this._issues = this.getRefs()
      .map(number => this.repo.getIssue(number))
      .filter(x => x);

    return this._issues;
  }

  getMergedAt() {
    return this.mergedAt;
  }

  getRefs() {
    if ("_refs" in this) {
      return this._refs;
    }

    const text = this.body + this.title;
    const match1 = (text.match(/#\d+/g) || []).map(x => x.slice(1));
    const match2 = text.match(/\d+/g) || [];
    this._refs = [...new Set([...match1, ...match2])].map(x => +x);

    return this._refs;
  }

  getScore() {
    if ("_score" in this) {
      return this._score;
    }

    this._score = sum(
      this.getIssues().map(issue => issue.getScore() / issue.getPullCount())
    );
    return this._score;
  }

  isDevelop() {
    return this.baseRef === "develop" || this.baseRef === "dev";
  }

  isMerged() {
    return !!this.mergedAt;
  }

  hasIssue(issue) {
    return this.getIssues().includes(issue);
  }

  setRepo(repo) {
    this.repo = repo;
  }

  setUser(user) {
    this.user = user;
  }
}
