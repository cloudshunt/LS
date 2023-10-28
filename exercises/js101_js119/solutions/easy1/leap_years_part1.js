/*
input: num
output: bool

explicit:
implicit:
- assume all given num is > 0?
- assume all num are integers?

Question in my own word (mental model)
Create function, takes number,
(order matters)
- if divisible by 400, leap year
- if divisible by 4 and by 100, not leap year
- if divible by 4, leap year
- all else are not leap year
if number is leap year, return true.
if number is not leap year, return false.

case: checked half of them, seems ok

Data structure: n/a
Algo:

SET function, Set parameter as year
- if divisible by 400, return true
( year % 400 is 0)

- if divisible by 4 and by 100, return false 
( year % 4 is 0  AND year % 100 is 0)

- if divible by 4, return true 
( year % 4 is 0)
- else, return false


PEDAC 19min 17sec
*/

// code 4min 37 sec
function isLeapYear(year){
  if (year % 400 === 0){
    console.log(true);
  } else if ( year % 100 === 0){
    console.log(false);
  } else {
    console.log(year % 4 === 0);
  } 
}

//FURTHER EXPLORATION // I used chatGPT to answer...
//....
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true