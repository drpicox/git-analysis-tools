import { ADD_COMMITS } from "./actions/addCommits";
import { FILL_COMMITS } from "./actions";

export function commitsReducer(
  state = {
    "1cd6067ec71627e93f48edee107f7b6aaba681aa": {
      java: {
        total: 11,
        passed: 11,
        lines: { found: 450, hit: 429 },
        branches: { found: 48, hit: 40 }
      },
      js: {
        total: 10,
        passed: 10,
        lines: { found: 424, hit: 299 },
        branches: { found: 154, hit: 88 }
      }
    }
  },
  action
) {
  switch (action.type) {
    case ADD_COMMITS: {
      let changes = false;
      const copy = { ...state };
      action.commits.forEach(commit => {
        const { sha, previousSha } = commit;
        if (!copy[sha] || copy[sha].previousSha !== previousSha) {
          copy[sha] = commit;
          changes = true;
        }
      });
      return changes ? copy : state;
    }
    case FILL_COMMITS: {
      let changes = false;
      const copy = { ...state };
      action.commits.forEach(commit => {
        const { sha, previousSha } = commit;

        if (!copy[sha] || copy[sha].previousSha === previousSha) {
          copy[sha] = commit;
          changes = true;
        }
      });
      return changes ? copy : state;
    }
    default:
      return state;
  }
}
