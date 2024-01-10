/**
 * 
 * ALGO:
 *  SET arrLength = length of input array
 *  
 *  first half of new array:
 * 
 *  get first half array's end indx:
 *    arrLength / 2, round down.
 * 
 *  get second half arr's start indx.
 *    arrLength / 2, round up
 * let firstHalf = [];
 * let SecondHalf = [];
 * 
 * LOOP input array
 *  IF idx <= firstHalfArrEndIdx:
 *    firstHalf append array[idx]
 *  ELSE 
 *    secondHalf append array[idx];
 * 
 *  RETURN [firstHalf, secondHalf];
 * 
 */

function halvsies(arr) {
  let firstHalfArrEndIdx = Math.floor((arr.length - 1) /  2);

  let firstHalfArr = [];
  let secondHalfArr = [];

  for (let idx = 0; idx < arr.length; idx += 1) {
    if (idx <= firstHalfArrEndIdx) {
      firstHalfArr.push(arr[idx]);
    } else {
      secondHalfArr.push(arr[idx]);
    }
  }

  return [firstHalfArr, secondHalfArr];
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]