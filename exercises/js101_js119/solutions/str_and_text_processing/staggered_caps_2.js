/**
 * 
 */

// eslint-disable-next-line max-lines-per-function
function staggeredCase(inputStr, ignoreNonAlphabet = true) {
  let resultStr = '';
  let alphabetCount = 0;

  for (let char of inputStr) {
    if (isAlphabet(char)) {
      alphabetCount += 1;
      if (alphabetCount % 2 === 1) {
        resultStr += char.toUpperCase();
      } else {
        resultStr += char.toLowerCase();
      }
    } else if (ignoreNonAlphabet === true) {
      resultStr += char;
      continue;
    } else { // don't ignore non-alphabet
      alphabetCount += 1;
      resultStr += char;
    }
  }

  console.log(resultStr);
}

function isAlphabet(char) {
  return ('a' <= char.toLowerCase()) && (char.toLowerCase <= 'z');
}

staggeredCase('11a1bc', false);
