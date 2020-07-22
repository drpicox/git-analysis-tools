import { createWeakSelector } from "../../createWeakSelector";
import { SprintsScore } from "../models";
import { getUserSprintDevelopsScore } from "./getUserSprintDevelopsScore";
import { SPRINT_NUMBERS } from "../../../sprintEnds";

export class UserDevelopsScore {
  /**
   * @param {string} login
   * @param {import("./getUserSprintDevelopsScore").UserSprintDevelopsScore[]} sprints
   */
  constructor(login, sprints) {
    this.login = login;
    this.sprints = new SprintsScore(sprints, undefined, [1]);
    this.boxes = this.sprints.sprints;
    this.score = this.sprints.score;
  }
}

/** @type {(any, login:string) => UserDevelopsScore} */
export const getUserDevelopsScore = createWeakSelector(
  login => login,
  (state, login) => {
    const sprints = SPRINT_NUMBERS.map(sprint =>
      getUserSprintDevelopsScore(state, login, sprint)
    );

    return new UserDevelopsScore(login, sprints);
  }
);
