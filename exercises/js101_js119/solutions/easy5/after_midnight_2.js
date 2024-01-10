/**
 * Algo:
 * h : m
 * "24:00" is equal to 0 minutes
 * 
 * SET hourMinArr = inputTime.split(":")
 * "24:00" split with ":"
 * 
 * let hour = Number(hourMinArr[0]);
 * let minutes = Number(hourMinArr[1]);
 * 
 * 
 * BEFORE midnight is the tricky part:
 * I'll get all the minutes but in negative
 * use minutesPerDay + beforeMidnightMinues(notes: it's in negative)
 * the result will be 
 * IF result EQUAL 1440 or 0, then it's 0
 * 
 */

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  let hourMinArr = timeStr.split(":");
  let hour = Number(hourMinArr[0]);
  let minutes = Number(hourMinArr[1]);

  let deltaMinutes = (hour * MINUTES_PER_HOUR) + minutes;
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY || deltaMinutes === 0) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);