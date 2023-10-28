/*
understand the difference,
first glance seems the same but the 
differentiator came from

part1:
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false

part2:
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true

before: julian Calendar
after 1752 = Gregorian Calender
leap years both before and after 1752

if year < 1752 use Julian Calendar
  just year % 4 === 0, return true, else false
if year >= 1752 use Gregorian calender


PEDAC 13min
code 4 min
*/


function isLeapYear(year){
  if ( (year < 1752) && (year % 4 === 0) ) {
    console.log(true);
  } else if ( year < 1742){
    // I should need to have year < 1742
    console.log(false);
  } else if (year % 400 === 0){
    console.log(true);
  } else if ( year % 100 === 0){
    console.log(false);
  } else {
    console.log(year % 4 === 0);
  } 
}


isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true