let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

/*
  output: arr (with obj where all num are even)

  ALGO:
  arr MAP will iterate {a} {b,c,d} {e,f}
    during Map func call: get keys Arr [a] [b,c,d] [e,f]
      keysArr.FILTER

 */

//                     { a: [1, 2, 3] }
let result = arr.filter(obj => {
//          [[1,2,3]]     .every([1,2,3]) (if recieves true, return true to filter)
  return Object.values(obj).every(subArr => {
// True or False<<  [1,2,3].every(condi)
    return subArr.every(num => num % 2 === 0);
  });
});


console.log(result);
/*
Object.values(obj)
[ [ 1, 2, 3 ] ] >>> [1,2,3]

[ [ 2, 4, 6 ], [ 3, 6 ], [ 4 ] ]
    console.log(subArr);    console.log(subArr);
[ [ 8 ], [ 6, 10 ] ]

.every

*/