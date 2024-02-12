/*
// This took me 51 minutes
Agenda:
Input: array
Output: array

With given array, for each element of it, count the amount of nums that are less than the current element (do not count duplicate numbers).
then display the count in a new array which corresponds to the elements of the original index

ex: input:[3,1,2]  output: [2,0,1]
ex2: input [3,2,1,2] output: [2,1,0,1] (don't count duplicats)


Rules:
- don't count dup nums
- if given just 1 element, return [0]


Algo:
- Data structure: use object to store each nums and it's respective
count that are larger than other numbers:
^^^^ SET trackObj = {}
- copy the array
- sort the copied array
SET a counter = 0, that counts the amount of num less then the current
num

- Loop through the sorted array:
if curNum is not a key in the object
  object add curNum as key, and the counter as the value
  counter increments by 1

if curNum is a key in the object: //NOTE: address duplicates
  do not increment counter, go to next iteration

- At this point, i have an object that consist of Key's and its corresponding value that has the amount of numbers that the key is larger than.

SET resultArr = []

Loop through originalInputArr:
use the curNum as key to access the value of trackObj
append that value into resultArr
*/

function smallerNumbersThanCurrent(arr) {
  let trackerObj = {};
  let copiedArr = arr.slice().sort((a,b) => a - b); //ascending order
  let counter = 0; //sequential count that skips duplicate numbers


  copiedArr.forEach((curNum) => {
    if ( !trackerObj.hasOwnProperty(String(curNum))) {
      trackerObj[curNum] = counter;
      counter++;
    } // if duplicate occurs, counter does not increment
  })

  return arr.map((curNum) => trackerObj[String(curNum)]);


}

// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
// 1:0,2:1,4:2,5:3,6:4,8:5,13:6
// console.log(smallerNumbersThanCurrent(
//   [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
// console.log(smallerNumbersThanCurrent([1])); // [0]
