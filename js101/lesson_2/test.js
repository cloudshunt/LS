let x = [[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
  return arr.filter(item => {
    if (typeof item === 'number') {    // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});

let mixArr = [[8, 13, 27], ['apple', 'banana', 'cantaloupe']];

function func(arr) {
  // ---- if my outer callback is filter---
  //return [27] >>> outter function which will evaluate value true, 
  // so will return all [8,13,27]
  //return ['apple'] >>> outer function will evaluate true, 
  // so will return entire array
  // --- if my outer callback is map---
  // will recieve the filtered [27] and the transformed array
  // same as the next iterated array
  return arr.filter(item => {
    console.log(item);
    if (typeof item === 'number') {    // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
}
let y = mixArr.map(func);
console.log(y[0],y[1]);


