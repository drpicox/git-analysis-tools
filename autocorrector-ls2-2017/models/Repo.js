export class Repo {
  constructor(raw) {
    this.name = raw.name;
    this.issues = {};
    this.pulls = {};
    this.users = {};
    this.weeks = [];
  }

  addWeek(week) {
    this.weeks.push(week);
    this.weeks.sort();
    week.setRepo(this);
  }

  getIssue(number) {
    return this.issues[number];
  }

  getIssues() {
    return Object.values(this.issues);
  }

  getPull(number) {
    return this.pulls[number];
  }

  getPulls() {
    return Object.values(this.pulls);
  }

  getWeeks() {
    return this.weeks;
  }

  getUser(login) {
    return this.users[login];
  }

  getUsers() {
    return Object.values(this.users);
  }

  putIssue(issue) {
    this.issues[issue.number] = issue;
    issue.setRepo(this);
  }

  putPull(pull) {
    this.pulls[pull.number] = pull;
    pull.setRepo(this);
  }

  putUser(user) {
    this.users[user.login] = user;
    user.setRepo(this);
  }
}
