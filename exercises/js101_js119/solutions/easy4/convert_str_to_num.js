/**
 * can i use the implicit conversion to
 * help with conversion?
 */

function stringToInteger(numStr) {
  let resultNum = 0;
  let multiplier = 1;

  for (let idx = numStr.length - 1; idx >= 0; idx -= 1) {
    resultNum += convertCharToInt(numStr[idx]) * multiplier;
    multiplier *= 10;
  }

  return resultNum;
}

function convertCharToInt(char) {
  return char.charCodeAt() - 48;
}
console.log(stringToInteger('91') );

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true