/*
 Input: number
 output: string

 Explicit:
 - length of string same as inputNum
 - always start with 0
 Implicit: none

 Question: what if 0 is an input? will the output
 be an empty string?

Algo:

high level:
SET curDigit = 1
SET result = ''

will loop input num amount of times
and update result with concat curDigit to result.
IF curDigit equal to 1, curDigit = 0,
else IF curDigit equal to 0, curDigit = 1

 */

function stringy(num) {
  let curDigit = '1';
  let result = '';

  for (let curNum = 0; curNum < num; curNum += 1) {
    result += curDigit;
    if (curDigit === '1') curDigit = '0';
    else if (curDigit === '0') curDigit = '1';
  }

  console.log(result);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
