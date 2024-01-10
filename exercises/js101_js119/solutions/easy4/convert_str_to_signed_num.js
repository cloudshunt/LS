/**
 * IF "-" with the 0th idx:
 *  update string num with removed 0th idx,
 *  and then * -1 to the result
 * IF "+" with 0th idx:
 *  update string num with removed 0th idx
 * ELSE:
 *
 *
 */

function stringToSignedInteger(numStr) {
  let isNegative = false;
  if (numStr[0] === '-') {
    numStr = numStr.slice(1);
    isNegative = true;
  } else if (numStr[0] === '+') {
    numStr = numStr.slice(1);
  }


  let resultNum = 0;
  let multiplier = 1;

  for (let idx = numStr.length - 1; idx >= 0; idx -= 1) {
    resultNum += convertCharToInt(numStr[idx]) * multiplier;
    multiplier *= 10;
  }

  if (isNegative) return resultNum * -1;
  else return resultNum;
}

function convertCharToInt(char) {
  return char.charCodeAt() - 48;
}
//console.log(stringToInteger('91') );