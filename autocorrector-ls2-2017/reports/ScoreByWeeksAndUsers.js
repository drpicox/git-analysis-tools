import { intersect } from "../util/intersect";
import { sum } from "../util/sum";

export class ScoreByWeeksAndUsers {
  constructor(repo) {
    this.repo = repo;
  }

  getHeader() {
    return `repo,user,${this.repo.getWeeks().join(",")}`;
  }

  getReport() {
    return `${this.getHeader()}\n${this.getRows().join("\n")}\n`;
  }

  getRow(user) {
    return `${this.repo.name},${user.login},${this.getRowScores(user).join(
      ","
    )}`;
  }

  getRowScores(user) {
    const weeks = this.repo.getWeeks();
    const pulls = user.getPulls();
    return weeks.map(week =>
      sum(intersect(week.getPulls(), pulls).map(pull => pull.getScore()))
    );
  }

  getRows() {
    return this.repo.getUsers().map(user => this.getRow(user));
  }
}
