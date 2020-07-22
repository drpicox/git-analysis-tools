import { createWeakSelector } from "../../createWeakSelector";
import { listUserCommits } from "../../";
import { SprintsScore, CommitDiffScore } from "../models";

export class UserFrontScore {
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

/** @type {(any, login:string) => UserFrontScore} */
export const getUserFrontScore = createWeakSelector(
  login => login,
  (state, login) => {
    const commits = listUserCommits(state, login).map(
      commit =>
        new CommitDiffScore(
          commit,
          /^src\/www\/[^_].+\.js$/,
          /^src\/www\/__test__\/matchers\/.+_.+\.js$/
        )
    );
    console.log("front", login, listUserCommits(state, login), commits);
    const sprints = new SprintsScore(
      commits,
      [0.29, 0.41, 0.41, 0.2, 0.1, 0.1, 0.05],
      [1, 0.8, 0.5, 0.1]
    );

    return new UserFrontScore(login, sprints);
  }
);
