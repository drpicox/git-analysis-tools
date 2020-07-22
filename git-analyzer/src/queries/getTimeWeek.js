const MS = 1;
const SECOND = 1000 * MS;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;

function getTimeWeek(time) {
  return Math.floor(time / WEEK);
}

module.exports = getTimeWeek;
