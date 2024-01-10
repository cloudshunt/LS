/**
 * 
 * 
 */


function substrings(inputStr) {
  let substrs = [];

  for (let idx in inputStr) {
    let subresult = leadingSubstrings(inputStr.slice(idx, inputStr.length));
    substrs = substrs.concat(subresult);
  }
  console.log(substrs);
}

function leadingSubstrings(str) {
  return str.split('').map((_, index) => str.slice(0, index + 1));

}

substrings('abcde');

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]