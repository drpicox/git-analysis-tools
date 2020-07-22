import { intersect } from "../util/intersect";
import { sum } from "../util/sum";

export class ScoresWithAndWithoutBaseDevelop {
  constructor(repo) {
    this.repo = repo;
  }

  getHeader() {
    return `repo,kind,score,...pulls`;
  }

  getReport() {
    return `${this.getHeader()}\n${this.getRows().join("\n")}\n`;
  }

  getDevelopPulls() {
    return this.repo.getPulls().filter(pull => pull.isDevelop());
  }

  getDevelopScore() {
    return sum(this.getDevelopPulls().map(pull => pull.getScore()));
  }

  getNoDevelopPulls() {
    return this.repo.getPulls().filter(pull => !pull.isDevelop());
  }

  getNoDevelopScore() {
    return sum(this.getNoDevelopPulls().map(pull => pull.getScore()));
  }

  getRows() {
    return [
      [
        this.repo.name,
        "with",
        this.getDevelopScore(),
        this.getDevelopPulls().map(x => x.number)
      ].join(","),
      [
        this.repo.name,
        "without",
        this.getNoDevelopScore(),
        this.getNoDevelopPulls().map(x => x.number)
      ].join(",")
    ];
  }
}
