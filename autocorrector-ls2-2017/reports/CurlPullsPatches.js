import { intersect } from "../util/intersect";
import { sum } from "../util/sum";

export class CurlPullsPatches {
  constructor(repo) {
    this.repo = repo;
  }

  getHeader() {
    return `# curl command`;
  }

  getReport() {
    return `${this.getHeader()}\n${this.getRows().join("\n")}\n`;
  }

  getUserRows(user) {
    return user.getPulls().map(pull => `curl -L ${pull.patchUrl} `);
  }

  getRows() {
    return this.repo.getPulls().map(pull => {
      const filename = `'patches/${this.repo.name}_${pull.number}.patch'`;
      return `[ -s ${filename} ] || curl -L ${pull.patchUrl} -o ${filename}`;
    });
  }
}
