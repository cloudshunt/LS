//ex2
// let myArray = [1, 3, 6, 11, 4, 2,
//   4, 9, 17, 16, 0];

// myArray.forEach((num) => {
//   if( (num % 2) === 0){
//     console.log(num);
//   }
// });

//ex3
let myArray3 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

// for (let idx = 0; idx < myArray3.length; idx++){

// }

// for(idx in myArray3){
//   for (idx2 in myArray3[idx]){
//     if (  (myArray3[idx][idx2]) % 2 === 0){
//       console.log(myArray3[idx][idx2])
//     }
//   }
// };

// try doing it in for each
// myArray3.forEach(function(idxOutter){
//   idxOutter.forEach(function(num){
//     if( num % 2 === 0){ console.log(num);}
//   });
// });

//ex4
// let myArray4 = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];

// let x = myArray4.map(function(num){
//   if (num % 2 === 0){ return 'even';}
//   else {return 'odd';}
// });

// console.log(x)

//ex5
// function findIntegers(things){
//   return things.filter((thing)=> Number.isInteger(thing));
// };

// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]
 
//ex6
// function oddLengths(arr){
//   let strLen = arr.map(function(str){return str.length});
//   return strLen.filter((len) => len % 2 !== 0)
// }
// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

//ex7
// function sumOfSquares(array){
//   return array.reduce((accu, curVal) => accu + (curVal * curVal), 0 )
// }
// let array = [3, 5, 7];
// console.log(sumOfSquares(array)); // => 83
// //  9 + 25 + 49 = 83


//ex8

// function oddLengths(arr){
//   return arr.reduce((accu, curVal) => {
//     if(curVal.length % 2 !== 0){
//       accu.push(curVal.length);
//     }

//     return accu;
//   }, []);

// };

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]


//ex9

// function has3(arr){
//   console.log(arr.includes(3));
// }
// let numbers1 = [1, 3, 5, 7, 9, 11];
// let numbers2 = [];
// let numbers3 = [2, 4, 6, 8];

// has3(numbers1)
// has3(numbers2)
// has3(numbers3)

//ex10

// let arr = [
//   ["hello", "world"],
//   ["example", "mem", null, 6, 88],
//   [4, 8, 12]
// ];

// for (let i = 0; i < arr.length; i++){
//   for (let j= 0; j < arr[i].length; j++){
//     if(arr[i][j] === 6){
//       arr[i][j] = 606;
//     };
//   };
// };

// arr.forEach((idx)=> console.log(idx))


