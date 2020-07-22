import { createWeakSelector } from "../../createWeakSelector";
import { listUserIssues } from "../../issues";
import { getIssueScore } from "./getIssueScore";
import { SprintsScore } from "../models";

export class UserIssuesScore {
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

/** @type {(any, login:string) => UserIssuesScore} */
export const /**
   * @param {any} login
   */
  /**
   * @param {any} state
   * @param {string} login
   */
  getUserIssuesScore = createWeakSelector(
    login => login,
    (state, login) => {
      const issues = listUserIssues(state, login).map(
        ({ repository, number }) =>
          getIssueScore(state, repository.name, number)
      );
      const sprints = new SprintsScore(
        issues,
        [0.2, 0.4, 0.4, 0.2, 0.1, 0.05],
        [1, 0.8, 0.4]
      );

      return new UserIssuesScore(login, sprints);
    }
  );
