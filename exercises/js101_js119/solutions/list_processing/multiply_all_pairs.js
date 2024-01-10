
function multiplyAllPairs(arr1, arr2) {
  let result = [];

  for (let arr1num of arr1) {
    for (let arr2num of arr2) {
      result.push(arr1num * arr2num);
    }
  }

  result.sort((num1,num2) => num1 - num2);
  console.log(result);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]