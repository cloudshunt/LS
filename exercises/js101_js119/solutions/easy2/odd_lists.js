/*
  Input: arr
  Output: arr

  Case: Given
  Edge Case: Given

  Algo:
  SET variable resultArr with empty Array
  counter start at index 0
  Loop through the Given array
    append to resultArr with resultArr[counter]
    increment counter(index) by 2,
 */

function evens(arr) {
  let resultArr = [];
  for (let idx in arr) {
    if (idx % 2 === 1) resultArr.push(arr[idx]);
  }

  return resultArr;
}

// function oddities(arr) {
//   let resultArr = [];
//   for (let idx = 0; idx < arr.length; idx += 2) resultArr.push(arr[idx]);
//   return resultArr;
// }

console.log(evens([2, 3, 4, 5, 6])); //  [3,5]
console.log(evens([1, 2, 3, 4, 5, 6]));
console.log(evens(["abc", "def"]));
console.log(evens([123]));
console.log(evens([]));

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []