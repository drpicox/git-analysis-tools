import { createWeakSelector } from "../../createWeakSelector";
import {
  listUserDevelopedIssues,
  extractIssuePull,
  extractIssueWeight
} from "../../issues";
import {
  getSprintNumber,
  SPRINT_NUMBERS,
  SPRINT_ENDS
} from "../../../sprintEnds";

const MAX_WEIGHT = 6;

export class UserSprintDevelopsScore {
  constructor(login, date, issues, weight, ownWeight) {
    this.login = login;
    this.date = date;
    this.issues = issues;
    this.weight = weight;
    this.ownWeight = ownWeight;
    this.score = this._computeScore();
  }

  _computeScore() {
    return Math.min(1, this.weight / MAX_WEIGHT);
  }
}

/** @type {(any, login:string, sprint: number) => UserSprintDevelopsScore} */
export const getUserSprintDevelopsScore = createWeakSelector(
  (login, sprint) => `${login}#${sprint}`,
  (state, login, sprint) => {
    const issues = listUserDevelopedIssues(state, login).filter(
      i => sprint === getSprintNumber(extractIssuePull(i).createdAt)
    );

    const ownWeight = issues
      .map(i => extractIssueWeight(i))
      .reduce((a, b) => a + b, 0);

    let weight = ownWeight;
    if (sprint < SPRINT_NUMBERS.length - 1 && weight < MAX_WEIGHT) {
      const nextWeight = getUserSprintDevelopsScore(state, login, sprint + 1)
        .ownWeight;
      weight += Math.max(
        0,
        Math.min(MAX_WEIGHT - weight, nextWeight - MAX_WEIGHT)
      );
    }

    return new UserSprintDevelopsScore(
      login,
      SPRINT_ENDS[sprint],
      issues,
      weight,
      ownWeight
    );
  }
);
