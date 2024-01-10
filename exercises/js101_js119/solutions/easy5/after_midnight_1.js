// /**
//  * 
//  * Explicit:
//  * - positive num indicates morning minutes
//  * pass mid night
//  * - negative num indicates evening minutes
//  * before mid night
//  * 
//  * Input: num
//  * output: strin as time
//  * 
//  * Concept: it like going forward and backward
//  * 
//  * 
//  * Algorithm:
//  * 
//  * 1440 minutes in a day
//  * 
//  * const minutesPerHour = 60;
//  * const hoursPerDay = 24;
//  * hours =inputMin / minutesPerHour
//  * 
//  * hours / hoursPerDay = 2.083
//  * IF hours > hoursPerDay(24)
//  * ----
//  * 
//  * ex:
//  * ~~~~~
//  * IF minute < 1440
//  *  800 / 60 = 13.3333 13hours
//  * inputMinutes / 60(b/c 60 min = 1 hour)
//  * 
//  * calcResult - 13 hours (truncated)
//  * 0.3333 * 60 = 19.98 minutes
//  * can round to to 20 min
//  * 
//  * so we are at 13:20
//  * 
//  * ~~~
//  * IF min > 1440
//  * 5000min /60min(1h) = 50 hours
//  *  calc - 50hours(truncated) = 0 hour
//  * 
//  * 0hours * 60minutes(1h) = 0 minutes
//  * 50:0min
//  * 
//  * 50h / 24h = 2.083
//  * round to nearest int
//  * 2 Hours
//  * 
//  * ----- how about if input Int is negative?
//  * 
//  * IF inputMin > -1440 (within a day)
//  * 1440 MINUS POSITIVE(inputMin) = 1437 min
//  * 1437 min / 60min = 23.95 hours
//  * hour = Truncate(23.95) hours
//  * min = 0.95hour * 60min/1h = 57minutes
//  * 
//  * 23h57minutes
//  * 
//  * IF inputMin < -1440 (more than a day)
//  * inputMin(4231) / 1440 = 2.93819
//  * days = truncate(2.93819) = 2 days
//  * 
//  * 2.93819 days - 2 days = 0.93819 day
//  * 0.93819 day = ? minute
//  * 0.93819 day * 24hours / day
//  * 22.5167 hours * 60 minutes/h 
//  * = 1351, make it negative -1351
//  * 1440 - 1351 = 89 min
//  * 89 min / 60min = 1.483hours
//  * hour = truncate(1.483) = 1
//  * 1.483 - hour = 0.483hours
//  * 0.483 hours * 60min/1h =  28.98, round 29
//  * 
//  * 01hour 29min
//  * 
//  * 
//  * 
//  */


// const MINUTES_PER_DAY = 1440;
// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;

// function timeOfDay(inputMinutes) {
//   if (inputMinutes < MINUTES_PER_DAY) {
//     let totalHours = inputMinutes / MINUTES_PER_HOUR;
//     let hours = Math.trunc(totalHours);

//     let remainHours = totalHours - hours;
//     let totalMinutes = remainHours * MINUTES_PER_HOUR;
//     let minutes = Math.round(totalMinutes);
//     displayTime(hours, minutes);
//   }

//   if (inputMinutes > MINUTES_PER_DAY) {
//     let totalHours = inputMinutes / MINUTES_PER_HOUR;
//     let hours = Math.trunc(totalHours);

//     let remainHours =  Math.trunc(totalHours);
//     let totalMinutes = remainHours * MINUTES_PER_HOUR;
//     let minutes = Math.round(totalMinutes);

//     hours = Math.round(hours / HOURS_PER_DAY);
//     displayTime(hours, minutes);
//   }
// }
// /**
//  * IF min > 1440
//  * 5000min /60min(1h) = 50 hours
//  *  calc - 50hours(truncated) = 0 hour
//  * 
//  * 0hours * 60minutes(1h) = 0 minutes
//  * 50:0min
//  * 
//  * 50h / 24h = 2.083
//  * round to nearest int
//  * 2 Hours
//  */

// function displayTime(hours, minutes) {
//   let hoursStr = String(hours).padStart(2, '0');
//   let minutesStr = String(minutes).padStart(2, '0');
//   console.log(`${hoursStr}:${minutesStr}`);
// }

// timeOfDay();

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}

