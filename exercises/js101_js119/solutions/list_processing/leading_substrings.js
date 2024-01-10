/**
 * input: string
 * output: array []
 * 
 * explicit:
 * - get sub string, start with same word
 * as input string
 * - start with shortest substring ascend to longest
 * 
 * Algo
 * SET newString
 * SET newArr
 * Loop through inputStr:
 *  newString update concate with curChar;
 *  append newString to newArr
 */

function leadingSubstrings(str) {
  // my answer
  // let newStr = '';
  // let newArr = [];
  // for (let char of str) {
  //   newStr += char;
  //   newArr.push(newStr);
  // }
  // console.log(newArr);

  // try using array method wihtout forEach
  console.log(str.split('').map((_, index) => str.slice(0, index + 1)));

}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]