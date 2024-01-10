/**
 * Input string: mix of characters
 * Output: string: no non-alphabat characters besides space.
 * 
 * Explicit:
 * - No consective space,
 * - If consective non-alphabat, replace with one space instead
 * 
 * Question:
 * - How do I identify non-alphabat
 * 
 * Algo:
 * High level logic:
 * 
 * SET newString
 * Loop through inputSTRING, (make sure)
 *  IF char is alphabat: continue
 *  IF char is not alphabat AND (char's next element is alphabat OR element will be out of range): 
 *    replace with a " "
 *  ELSE continue
 *
 * 
 */

function isAlphabet(char) {
  return /^[A-Za-z]$/.test(char);
}

function cleanUp(inputStr) {
  let result = "";
  for (let idx = 0; idx < inputStr.length; idx += 1) {
    if (isAlphabet(inputStr[idx])) result += inputStr[idx];
    else if (isAlphabet(inputStr[idx + 1]) === true ||
             inputStr[idx + 1] === undefined) {
      result += " ";
    }
  }
  return result;
}

console.log(cleanUp("---what's my +*& line?"));

