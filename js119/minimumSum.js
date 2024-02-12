
// figured out in 18min30sec
// are you able to solve this without doing + 1 + 2 +3 type of thing?
// yes, i figured it out
/*
 Agenda:
  find 5 consective nums that that has the least sum among other 5 
  conesctive nums in the array.

Rule:
  - if input length is less than 5, return null

Algo:
- guard: if input length < 5, return null

SET resultSum = the max number in the array
- Loop through input array, get the sum of each 5 consective nums
- after getting the sum, compare it to resultSum, If current sum is less
than resultSum, update resultSUm as the current sum.


How to get current sum?
LOOP (must end at 5th element before less, idx < length - 4)
during loop, I add curNum + subsequent 4 elements
 idx + 1 idx + 2... etc


return resultSum
 */

// My Answer 1
// function minimumSum(arr) {
//   if (arr.length < 5) return null;

//   let resultSum = 99999;

//   for (let idx = 0; idx < arr.length - 4; idx++) {
//     let curSum = arr[idx] + arr[idx + 1] + arr[idx + 2] + arr[idx + 3] + arr[idx + 4];
//     if (curSum < resultSum) resultSum = curSum;
//   }

//   return resultSum;
// }

// My Answer 2
// function minimumSum(arr) {
//   if (arr.length < 5) return null;

//   let resultSum = 99999;

//   for (let idx = 0; idx < arr.length - 4; idx++) {

//     let curSum =  arr.slice(idx, idx + 5)
//                      .reduce((accu, curNum) => accu + curNum, 0);

//     if (curSum < resultSum) resultSum = curSum;
//   }

//   return resultSum;
// }


// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// Examples:

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".



