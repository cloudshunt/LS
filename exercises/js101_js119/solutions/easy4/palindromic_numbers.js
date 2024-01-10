/**
 * //first run
 * input: num
 * output: boolean
 * 
 * Assumption: input will just be num
 * 
 * Algo:
 * 
 * SET numStr = convert inputNum to str
 * 
 * IF numStr EQUAL numStr reversed, return true
 * ELSE return false
 * 
 * //further exploration:
 */

function isPalindromicNumber(num) {
  let numStr = String(num);
  let reversedNumStr = numStr.split('').reverse().join('');
  if (numStr === reversedNumStr) return true;
  else return false;

}

