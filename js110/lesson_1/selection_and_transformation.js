// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// // my solution:
// let resultObj = {};
// let produceKeys = Object.keys(produce);
// for (let key of produceKeys) {
//   if (produce[key] === 'Fruit') {
//     resultObj[key] = produce[key];
//   }
// }

// console.log(resultObj);

//----

let myNumbers = [1, 4, 3, 7, 2, 6];

// function doubleOddIdx(nums) {
//   for (let idx = 1; idx < nums.length; idx += 2) {
//     myNumbers[idx] *= 2;
//   }

//   return nums;
// }

// console.log(doubleOddIdx(myNumbers));  // => [1, 8, 3, 14, 2, 12]

function multiply(nums, targetNum) {
  let newNums = [];
  for (let num of nums) {
    newNums.push(num * targetNum);
  }
  return newNums;
}

console.log(multiply(myNumbers, 3));// => [3, 12, 9, 21, 6, 18]
