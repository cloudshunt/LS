/*

Rephrase question:
Given an array of sub-arrays,
create an object that has  key-value pairs
where each sub-array's first element is the
key and the second element is it's corresponding
value
ex:
[['a',1]] becomes {a:1}

ALGORITHM:
need to establish new Object
Iterate through each sub-array
Then iterate through each sub-array's element
  the 0th index within the sub-array = key for new obj
  the 1st index within the sub-array = value for new obj
 */

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let resultObj = {};
arr.forEach(subArr => {
  resultObj[subArr[0]] = subArr[1];
});
console.log(resultObj);

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
