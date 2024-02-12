//note num.toFixed(decimal place) is a handy tool

/*
Agenda:
given a string, that has x amount of characters,
return the 
percentage of uppercase in it
percentage of lowercase in it
percentage of non-alphat in it

Rules:
- result will be in 2 decimal places


Algo:
Big picture:
  Have 3 counters. Loop through the string
  increment each respective counters when encoutnering
  its respective char.

  calculate the percentages, make sure 2 decimal place

  input them input the obj

SET resultObj: {lowercase: "", uppercase: "", neither: ""}
which will store the result of percentages

Set lowerCaseCount = 0
Set upperCaseCount = 0
Set neitherCount = 0

Loop through inputStr:
  check if char is lower case char
    if so, increment lowerCaseCount
  check if char is Upper case char
    if so, increment upperCaseCount
  if neither: it is a non-alphat char
    if so, increment neitherCount



How to get the percentages?

what is the uppercase char amount?
  uppercaseCharAmt / input.length
  result convert to two decimal place.
what is the lowercase char amount?
  lowerCaseCharAmt / input.length
  result convert to two decimal place.
what is the non-alphabat char amount?
  nonAlphabatCharAmt / input.length
  result convert to two decimal place.

Input them into respective object keys

 */


function letterPercentages(str) {
  let resultObj = {upperCase:"",lowerCase:"",neither:""};
  let upperCaseCount = 0;
  let lowerCaseCount = 0;
  let neitherCount = 0;

  for (let char of str) {
    if ('a' <= char && char <= 'z') {
      lowerCaseCount++;
    } else if ('A' <= char && char <= 'Z') {
      upperCaseCount++;
    } else {
      neitherCount++;
    }
  }

  let upperCasePercentage  = ((upperCaseCount / str.length) * 100).toFixed(2);
  let lowerCasePercentage = ((lowerCaseCount / str.length) * 100).toFixed(2);
  let neitherPercentage = ((neitherCount / str.length) * 100).toFixed(2);

  resultObj[`upperCase`] = upperCasePercentage;
  resultObj[`lowerCase`] = lowerCasePercentage;
  resultObj[`neither`] = neitherPercentage;

  return resultObj;
  
}

console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));
/*
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.
 */

// // test casees
// letterPercentages('abCdef 123');
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// letterPercentages('AbCd +Ef');
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// letterPercentages('123');
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }