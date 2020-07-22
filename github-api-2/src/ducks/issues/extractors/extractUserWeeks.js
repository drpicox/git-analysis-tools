import makeWeakReporter from "../../../lib/makeWeakReporter";
import { extractIssuePull } from "./";

const WEEKS_ENDS = [
  new Date("2019-10-28T11:00:00+01:00"),
  new Date("2019-11-04T11:00:00+01:00"),
  new Date("2019-11-11T11:00:00+01:00"),
  new Date("2019-11-18T11:00:00+01:00"),
  new Date("2019-11-25T11:00:00+01:00"),
  new Date("2019-12-20T11:00:00+01:00"),
  new Date("2019-19-20T23:55:00+01:00")
];

function pushWeek(weeks, thing, getDate = t => t.createdAt) {
  const date = new Date(getDate(thing));
  for (let i = 0; i < WEEKS_ENDS.length; i += 1) {
    if (date < WEEKS_ENDS[i]) {
      weeks[i].push(thing);
      break;
    }
  }
}

function pushWeeks(userWeeks, user, key, getDate) {
  userWeeks[key] = userWeeks[key] || WEEKS_ENDS.map(x => []);
  user[key].forEach(thing => pushWeek(userWeeks[key], thing, getDate));
}

export const extractUserWeeks = makeWeakReporter(user => {
  const userWeeks = {};

  userWeeks.user = user;
  userWeeks._isWeeks = true;
  pushWeeks(userWeeks, user, "issues");
  pushWeeks(userWeeks, user, "reviews");
  pushWeeks(userWeeks, user, "develops", i => extractIssuePull(i).createdAt);
  pushWeeks(userWeeks, user, "merges", i => extractIssuePull(i).mergedAt);

  return userWeeks;
});
