import { normalize as normalizr, schema } from "normalizr";
const { Entity } = schema;

export function normalize(raw) {
  const label = new Entity("labels");
  const user = new Entity("users");
  const commit = new Entity(
    "commits",
    {
      user
    },
    { idAttribute: "sha" }
  );
  const milestone = new Entity("milestones", {
    creator: user
  });
  const issue = new Entity("issues", {
    user,
    milestone,
    assignee: user,
    assignees: [user],
    labels: [label]
  });
  const pull = new Entity("pulls", {
    user: user,
    milestone,
    assignee: user,
    assignees: [user],
    requested_reviewers: [user],
    head: commit,
    base: commit
  });

  const repo = new Entity(
    "repos",
    {
      issues: [issue],
      pulls: [pull],
      owner: user
    },
    { idAttribute: "name" }
  );
  commit.define({ repo });

  Object.keys(raw).forEach(repoName => {
    raw[repoName].name = repoName;
    raw[repoName].issues = raw[repoName].issues.filter(
      issue => !issue.pull_request
    );
    // raw[repoName].issues.forEach(issue => (issue.repo = repoName));
    // raw[repoName].pulls.forEach(issue => (issue.repo = repoName));
  });

  const lastWeek = new Date("12 Dec 2017");
  lastWeek.setDate(lastWeek.getDate() - 7);
  const weeks = [lastWeek];
  for (let i = 0; i < 10; i++) {
    const current = new Date(weeks[0]);
    current.setDate(current.getDate() - 7);
    weeks.unshift(current);
  }
  Array(10).forEach(x => weeks.push(lastWeek));

  return {
    ...normalizr(raw, [repo]).entities,
    weeks
  };
}
