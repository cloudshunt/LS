/**
 * 
 * input: arr
 * output: arr
 * 
 * In my words:
 * 
 * Input: [2,5,13]
 * Output: [2,7(2 + 5),20 (2 + 5 + 13)]
 * output array's element will
 * be a sum of current element + all previous
 * elements from the inputArr
 * 
 * empty Arr will return empty
 * 
 * Algo:
 * 
 * SET resultARR = []
 * 
 * SET Accumulator start with 0
 * LOOP [2,5,13]
 *  each iteration increment Accumenulator.
 *  Append Accumulator to resultARR
 * 
 * RETURN resultARR
 * 
 */

function runningTotal(arrNum) {

  let resultArr = [];

  arrNum.reduce((accu, curVal) => {
    let IncrementedValue = accu + curVal;
    resultArr.push(IncrementedValue);
    return IncrementedValue;
  }, 0);

  return resultArr;
}

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));