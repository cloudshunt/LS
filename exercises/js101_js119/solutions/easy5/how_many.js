/**
 * 
 * 
 * Explicit:
 * - words are case sensitive
 * 
 * Algo:
 * 
 * SET duplCount = {};
 * 
 * LOOP arr
 *  IF curStr in duplCount as key:
 *    duplCount[cuStr] += 1
 *  ELSE curStr is NOT in duplCount as key:
 *    duplCount[cuStr] = 1
 * 
 * Iterate through the object and print its
 * key and its respective value
 */

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
  let duplCount = {};

  for (let idx = 0; idx < arr.length; idx += 1) {
    if (duplCount[arr[idx]]) duplCount[arr[idx]] += 1;
    else duplCount[arr[idx]] = 1;
  }

  let duplKeys = Object.keys(duplCount);

  duplKeys.forEach((key) => {
    console.log(`${key} => ${duplCount[key]}`)
  });
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1