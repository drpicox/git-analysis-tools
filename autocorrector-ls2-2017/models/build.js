import { Repo } from "./Repo";
import { Issue } from "./Issue";
import { Pull } from "./Pull";
import { User } from "./User";
import { Week } from "./Week";

export function build(raw) {
  return Object.values(raw).map(buildRepo);
}

function buildRepo(raw) {
  const rawRepo = raw.pulls[0].head.repo;

  const repo = new Repo(rawRepo);

  buildIssues(raw.issues, repo);
  buildPulls(raw.pulls, repo);
  buildUsers(raw.pulls, repo);
  buildWeeks(repo);

  return repo;
}

function buildIssues(rawIssues, repo) {
  return rawIssues.filter(rawIssue => !rawIssue.pull_request).map(rawIssue => {
    const issue = new Issue(rawIssue);

    repo.putIssue(issue);
  });
}

function buildPulls(rawPulls, repo) {
  return rawPulls.filter(rawPull => !rawPull.pull_request).map(rawPull => {
    const pull = new Pull(rawPull);

    repo.putPull(pull);
  });
}

function buildUsers(rawPulls, repo) {
  rawPulls.forEach(rawPull => {
    let user = repo.getUser(rawPull.user.login);
    if (!user) {
      user = new User(rawPull.user);
      repo.putUser(user);
    }

    const pull = repo.getPull(rawPull.number);
    user.addPull(pull);
  });
  return repo.getUsers();
}

function buildWeeks(repo, lastDay = "12 Dec 2017", count = 12) {
  let date = new Date(lastDay);

  for (let i = 0; i < count; i++) {
    date.setDate(date.getDate() - 7);
    const week = new Week(date);
    repo.addWeek(week);
  }
}
