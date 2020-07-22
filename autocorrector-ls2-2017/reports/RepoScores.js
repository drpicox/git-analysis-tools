import { intersect } from "../util/intersect";
import { sum } from "../util/sum";

export class RepoScores {
  constructor(repo) {
    this.repo = repo;
  }

  getHeader() {
    return `concept,score`;
  }

  getReport() {
    return `${this.getHeader()}\n${this.getRows().join("\n")}\n`;
  }

  getRows() {
    return [
      `issues,${sum(this.repo.getIssues().map(issue => issue.getScore()))}`,
      `all pulls,${sum(this.repo.getPulls().map(pulls => pulls.getScore()))}`,
      `merged pulls,${sum(
        this.repo
          .getPulls()
          .filter(pull => pull.isMerged())
          .map(pulls => pulls.getScore())
      )}`,
      `users,${sum(this.repo.getUsers().map(user => user.getScore()))}`,
      `weeks,${sum(this.repo.getWeeks().map(week => week.getScore()))}`
    ];
  }
}
