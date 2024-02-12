/**
 * TOTALLY misinterpreted the question originally, should check
 * 3rd test case to confirm
 * 
 * Agenda:
 * - Input: bigInt 
 * - output: bigInt

 * 
 *  Given the input number which will be a fib position number,
 * return the output number that corresponds to that position.
 * (Note: our first position starts from 2, and the position starts with number 1)
 * Postion - - 1 2 3 4 5  ...
 *  Ex: // 1 1 2 3 5 8 13 ...
 *  input: 2n (given position 2, what is that fib number?)
 *  output: 7n (b/c 1 + 1 + 2 + 3)
 * 
 * 
 * Rule:
 * - argument always an Int
 * - argument always > 2
 * - use n after a number for calculating
 * large numbers (BigInt primitive)
 * 
 * Algo:
 * - Some sort of loop that will be incrementing numbers
 * - the incrementation consists of: 1stNum 2ndNum curNum
 * - 1stNum + 2ndNum = curNum

 * update: curNum as 1stNum + 2ndNum, 1stNum to 2ndNum, 2ndNum to curNum.
Go to next iteration if needed.
 * - repeat this process until getting to the desired postion
 * 
 * How do I increment to the desired position and stop?
 * - ex: give 2 as position number, will return 7 as a result
 * SET 1stNunm = 1
 * SET 2ndNum =  1
 * SET curNum =  0
 * 
 * LOOP: (starting idx = 1, idx <= inputPostion, idx increment by 1)
 *  curNum = 1st + 2nd
 *  1st = 2nd
 *  2nd = curNum
 *
 * RETURN curNum
 * 
 */


/*
Re-run attempt:

Input (bigint)
output (bigint)
Agenda:

Given a number that represents the amount of digits we want in a target
number.
example: if input:2 the output num should be between 10 ~ 99
if input:1 the output num should be 1 ~9

We are looking to return the first encountered position number of a fib sequence
that meets the digit criteria that we have.
EX:
input: 3, the first encounter number that is a 3 digit number is 144
1 1 2 3 5 8 13 21 34 55 89 144

The position in the sequence of 144 is 12
(note: first number is postion 1, 2nd num is position 2, etc...)

Rule:
You may assume that the argument is always an integer greater than or equal to 2.

ill do everyting in int to figure my logic out, and then add an n at the end of every
int I have in the algorithmo.
Algo:
- Loop and increment several things: 
postionTracker, curNumber at the curPosition

- converting the curNum into str, to check if that str's length
is the same as our input digit num:
  IF it is, return the current positionNum
  IF not, go to next iteration.


const startPositionNum = 3
1 1 2 3 5 8 13
SET num1 = 1
SET num2 = 1
SET curNum = 0
SET positionNum = startPositionNum

WHILE:
(start at positionNum(3), 
keep on loop until I reach the num we need, 
increment positionNum by 1)
  curNum = num1 + num2
  check if curNum meets condition, if so, break

  num1 = num2
  num2 = curNum
  positionNum++


RETURN positionNum


check condition logic:
===
input: curNum(bigInt) desiredDigit(bigInt)
output: boolean
this logic checks if the current number meet
the digit requirement we are looking for:

- convert curNum into str which will be pure numuric str, won't have n at the end)
- convert desiredDigit into a Number, which will rid of n
IF curNum str's length equal to desiredDigit Number, RETURN true ELSE false

 */


function findFibonacciIndexByLength(inputPosition) {
  let num1 = 1n;
  let num2 = 1n;
  let curNum;

  let positionNum = 3n;

  while (true) {
    curNum = num1 + num2;
    if (digitMatch(curNum, inputPosition)) break;

    num1 = num2;
    num2 = curNum;
    positionNum += 1n;
  }

  return positionNum;

}

function digitMatch(curNum, desiredDigit) {
  return String(curNum).length === Number(desiredDigit);
}


// Test Cases:
console.log(findFibonacciIndexByLength(2n) === 7n); // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.