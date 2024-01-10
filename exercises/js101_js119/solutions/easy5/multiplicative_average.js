/**
 * 
 * Input: array (nums)
 * Output: string but numbers
 * 
 * Algorithm:
 * 
 * SET multipliedResult = 1
 * 
 * LOOP through arr,
 *  increment multipliedResult with *= curValue
 * 
 * SET dividedResult = multipliedResult / arr.length;
 * 
 * Some sort of operation that allow dividedResult to only
 * get to 3 decimal place
 */

function multiplicativeAverage(arr) {
  let multipliedResult = 1;

  arr.forEach((num) => {
    multipliedResult *= num;
  });

  let dividedResult = multipliedResult / arr.length;

  let answer = dividedResult.toFixed(3);

  return answer;
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"