/**
 * SET resultString = ""
 * LOOP through string
 *  EMPTYSTRING concat cur char twice;
 * 
 * return resultString
 */

function repeater(inputStr) {
  let resultString = '';
  for (let idx = 0; idx < inputStr.length; idx += 1) {
    resultString += inputStr[idx].repeat(2);
  }
  console.log(resultString);
}
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""