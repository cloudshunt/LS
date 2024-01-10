// let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

// //sort by sum of each array
// let result = scores.sort((a,b) => {
//   return a.reduce((accu,curVal) => accu + curVal, 0) -
//          b.reduce((accu,curVal) => accu + curVal, 0);
// }
// );

// console.log(result);

let arr = ["b","c","a"];
arr.sort((a,b) => b.charCodeAt() - a.charCodeAt());
console.log(arr);
