import { createWeakSelector } from "../../createWeakSelector";
import { listUserCommits } from "../../";
import { SprintsScore, CommitDiffScore } from "../models";

export class UserBackScore {
  /**
   * @param {string} login
   * @param {SprintsScore} sprints
   */
  constructor(login, sprints) {
    this.login = login;
    this.sprints = sprints;
    this.boxes = sprints.sprints;
    this.score = this.sprints.score;
    this.weight = 2;
  }
}

/** @type {(any, login:string) => UserBackScore} */
export const getUserBackScore = createWeakSelector(
  login => login,
  (state, login) => {
    const commits = listUserCommits(state, login).map(
      commit =>
        new CommitDiffScore(
          commit,
          /^src\/main\/java\/com\/drpicox\/game\/.+\/.+\.java$/,
          /^src\/test\/java\/com\/drpicox\/game\/matchers\/.+_.+\.java$/
        )
    );
    const sprints = new SprintsScore(
      commits,
      [0.29, 0.41, 0.41, 0.2, 0.1, 0.1, 0.05],
      [1, 0.8, 0.5, 0.1]
    );

    return new UserBackScore(login, sprints);
  }
);
