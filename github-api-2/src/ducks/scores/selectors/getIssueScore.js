import { createWeakSelector } from "../../createWeakSelector";
import { getIssue } from "../../";
import { getIssueBodyScore } from "./getIssueBodyScore";

export class IssueScore {
  constructor(issue, body) {
    this.issue = issue;
    this.body = body;
    this.date = new Date(issue.createdAt);
    this.score = body.score;
  }
}

/** @type {(any, repositoryName:string, number:number) => IssueScore} */
export const getIssueScore = createWeakSelector(
  (repositoryName, number) => `${repositoryName}#${number}`,
  (state, repositoryName, number) => {
    const issue = getIssue(state, repositoryName, number);
    const body = getIssueBodyScore(state, issue.body);
    return new IssueScore(issue, body);
  }
);
