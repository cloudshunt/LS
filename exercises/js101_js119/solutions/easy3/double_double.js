/**
 * Input: Num
 * Output: Num
 *  - either double of the input num
 *  OR
 *  - input num itself if the input num
 *  IS 1) even number AND 2) a repeat of itself
 * 
 * Explicit:
 * Implicit:
 * 
 * Question: Do I assume that input is always num?
 * 
 * Data Struct: n/a
 * Algo:
 * High Level: 
 * - Check if num is even length(convert str), if not return false.
 * - Get first half of num.
 * - Get second half of num.
 * - compare the first half and second half
 * - if matches, return the num. If doesn't mathch then return
 * input num * 2
 * 
 * MORE details:
 * SET inputNumStr = inputNum converted to STR
 * IF inputNumStr length % 2 != 0, return inputNum * 2
 * 
 * ex: length = 6
 * 0 - 2, 3 - 5
 * 
 * SET firstHalf = inputNumStr(idx: 0, len/2 -1)
 * SET secondHalf = inputNumStr(idx: len/2, len -1 )
 *
 * IF firstHalf EQUAL secondHalf, RETURN inputNum
 * ELSE return inputNum * 2;
 * 
 */

function twice(num) {
  let inputNumStr = String(num);
  let inputNumLength = inputNumStr.length;

  if (inputNumLength % 2 !== 0) return num * 2;

  let firstHalf = inputNumStr.slice(0, inputNumLength / 2);
  let secondHalf = inputNumStr.slice(inputNumLength / 2 , inputNumLength);

  if (firstHalf === secondHalf) return num;
  else return num * 2;

}

console.log(twice(3434));
