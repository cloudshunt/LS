let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// let testReduce = [1,6,7];

// let result = testReduce.reduce((accu,curValue) => {
//   if (curValue % 2 === 1) return accu + curValue;
//   else return accu + 0;
// }, 0);

function getOddTotal(subArr) {
  return subArr.reduce((accu,curValue) => {
    if (curValue % 2 === 1) return accu + curValue;
    else return accu + 0;
  }, 0);
}


arr.sort((a,b) => {
  return getOddTotal(a) - getOddTotal(b);
});

console.log(arr);