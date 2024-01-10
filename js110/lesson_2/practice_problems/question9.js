let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
let newArr = arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.sort();
  } else return subArr.slice().sort((a,b) => a - b);
});

console.log(newArr);
