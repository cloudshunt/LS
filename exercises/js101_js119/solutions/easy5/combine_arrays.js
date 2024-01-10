/**
 * input: array, array
 * output: array
 * 
 */

function union(arr1,arr2) {
  let combinedArr = arr1.concat(arr2);
  let resultArr = [];

  for (let num of combinedArr) {
    if (!resultArr.includes(num)) {
      resultArr.push(num);
    }
  }

  return resultArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));
// [1, 3, 5, 6, 9]