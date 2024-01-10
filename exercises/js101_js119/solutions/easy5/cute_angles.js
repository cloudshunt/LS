/**
 * 
 * 60 minutes a degree
 * 60 seconds a minute
 * 
 * 30.50
 * 
 * implicit:
 *  is the mathematics behind it.
 * 
 * The integer aspect = degree
 * 
 * 

 * 
 * Take the remaing decimal from minutes * 60
 * ^^^ take result's integer = seconds.
 * Ignore remaining decimals
 * 
 * minutes or seconds shown has 0 infront of
 * single digit, such as 09, 01, etc...
 * 
 * 
 * 1. how to get decimal?
 * - num = 3.14, 
 *   truncateNum= num truncate
 *   num - truncateNum = decimals.
 * 
 * Take the remaining decimal* 60.
 * ^^^ take result's integer = minutes
 * 
 * Algo:
 * --
 * inputNum (ex: 76.73)
 * 
 * 
 * truncNum = inputNum truncated. (76)
 * SET degree = truncNum
 * 
 * (76.73 - 76 = 0.73)
 * SET degreeDecimal = inputNum - truncNum
 * --
 * SET newNum = (0.73 * 60 = 43.8)
 * truncNum = newNum truncated (43)
 * SET Minute = truncNum
 * Set minuteDecimal = newNum - truncNum (43.8 - 43 = 0.8)
 * if I have minutes less than 10, then add 0 padding
 * --
 * newNum = (0.8 * 60 = 48)
 * truncNum = newNum truncated (48)
 * SET seconds = truncNum
 * don't care for decimal num
 * if I have seconds less than 10, then
 * add 0 padding
 */

function dms(num) {
  console.log(num);
  let degree = Math.trunc(num);
  let degreeDecimal = num - degree;

  num = 60 * degreeDecimal;
  let minutes = Math.trunc(num);
  let minutesDecimal = num - minutes;

  num = 60 * minutesDecimal;
  let seconds = Math.trunc(num);

  minutes = String(minutes).padStart(2,'0');
  seconds = String(seconds).padStart(2,'0');

  return `${degree}˚${minutes}'${seconds}"`;
}


dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"