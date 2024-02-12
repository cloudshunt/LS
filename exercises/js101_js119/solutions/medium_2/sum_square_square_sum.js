// not updated on question sheet yet, should I?
// 21 minutes
// what i did is that i broke the problem down
// good job on the approach

/*
Agenda:
EX: input 3
A:
- Sum of the first count positive integers
- Square it
(1 + 2 + 3)^2

B:
- Sum of the squares of all count lead up
to input numer (included input number)

- get difference between A - B

Rules:
- If input is 1, output is 0 (b/c 1 - 1)

Algo:
Input: int
output: int

Big Pic:
  - find a way to loop up to the given number
  and stops at the given number

  - during the loop I have 2 trackers that will be updated

  - tracker1 that adds all num first and gets squared at the end
  - tracker2 that increments by adding the square of next number until the end.

Details:
maybe guard clause for < 2?

SET addAllthenSquareTracker = 0
SET SqaureFirstThenAddTracker = 0
  - loop logic:
    Loop starts at 1 and will increment by 1 until
    it goes pass the input number
  
  Within the LOOP
  - addAllthenSquareTracker logic:
    increment tracker by adding curNum
    IF curNum EQUAL inputNum
      update tracker by squaring the tracker

  - SqaureFirstThenAddTracker logic:
    increment tracker by squaring curNum
    and use that num to increment tracker

  When out of LOOP:
  return addAllthenSquareTracker - SqaureFirstThenAddTracker
  
 */

function sumSquareDifference(inputNum) {
  let addAllthenSquareTracker = 0;
  let SqaureFirstThenAddTracker = 0;

  for (let curNum = 1; curNum <= inputNum; curNum++) {
    addAllthenSquareTracker += curNum;
    if (curNum === inputNum) addAllthenSquareTracker **= 2;

    SqaureFirstThenAddTracker += (curNum ** 2);
  }

  return addAllthenSquareTracker - SqaureFirstThenAddTracker;
}

console.log(sumSquareDifference(3));
console.log(sumSquareDifference(1));
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(100));

