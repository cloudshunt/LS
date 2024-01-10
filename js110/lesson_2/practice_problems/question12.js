const arr = [
  ['b', 'c', 'a'],
  ['blue', 'black', 'green'],
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let newArr = JSON.parse(JSON.stringify(arr));

arr[0][0] = 1;
console.log(newArr);
console.log(arr);