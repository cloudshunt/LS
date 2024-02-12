// figured this one at in 23 minutes

/*
PEDAC:

reminder fib sequence:
1 1 2 3 5 8 13 21 34

input 1 returns 1
input 2 returns 1
input 3 returns 2
input 7 returns 13

Algo:
SET num1 = 1
SET num2 = 1
SET curPostion = 3
(starts at 3 as the loop doesn't deal with
position 1 and 2)
SET fib

If targetPosition EQUAL 1 or 2, return 1

Loop (only ends when reach certain condition)
(always start with num1 as 1 num2 1 and increment fib num from
  there )
- every iteration increments curPos number
- BREAK condition: if curPos > targetPos number
  (this means postional number has been reached and fib has
    been updated already)

LOGIC within LOOP (condi: curpostion <= targetPosition)
    fib = num1 + num2
    num1 = num2
    num2 = fib
    increment curPosition by 1

 */

function fibonacci(targetPosition) {
  if (targetPosition <= 2) return 1;
  let num1 = 1;
  let num2 = 1;
  let curPosition = 3;
  //(starts at 3 as the loop doesn't deal with
  //position 1 and 2)
  let fib;

  while ( curPosition <= targetPosition) {
    fib = num1 + num2;
    num1 = num2;
    num2 = fib;
    curPosition++;
  }

  return fib;

}

// LOGIC within LOOP (condi: curpostion <= targetPosition)
//     fib = num1 + num2
//     num1 = num2
//     num2 = fib
//     increment curPosition by 1

console.log(fibonacci(20));
console.log(fibonacci(50));
console.log(fibonacci(75));

//reminder fib sequence:
// 1 1 2 3 5 8 13 21 34


// Write fibonacci Numbers in procedure form

