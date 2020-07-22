export const SPRINT_ENDS = [
  new Date("2019-10-28T11:00:00+01:00"),
  new Date("2019-11-04T11:00:00+01:00"),
  new Date("2019-11-11T11:00:00+01:00"),
  new Date("2019-11-18T11:00:00+01:00"),
  new Date("2019-11-25T11:00:00+01:00"),
  new Date("2019-12-02T11:00:00+01:00"),
  new Date("2019-12-09T11:00:00+01:00"),
  new Date("2019-12-16T11:00:00+01:00"),
  new Date("2019-12-19T23:55:00+01:00")
];

export function getSprintNumber(date) {
  date = new Date(date);

  return SPRINT_ENDS.findIndex(end => date <= end);
}

export const SPRINT_NUMBERS = Object.keys(SPRINT_ENDS).map(Number);
