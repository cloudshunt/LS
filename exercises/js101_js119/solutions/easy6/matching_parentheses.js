/**
 * 
 * Input: str
 * output: boolean
 * 
 * SET closePar = {')':'('}
 * SET trackerPar = []
 * LOOP inputStr
 *  IF char NOT IN ')(':
 *    CONTINUE
 *  IF char IS NOT ')':
 *    trackerPar appends char
 *  IF char IS ')':
 *    IF trackerPar[last index] EQUAL '('
 *    trackerPar.pop()
 * 
 * IF trackerPar length EQUAL 0: return true
 * ELSE return false;
 */

function isBalanced(str) {
  let tracker = [];
  for (let idx = 0; idx < str.length; idx += 1) {
    let char = str[idx];
    if ( !(')('.includes(char) ) ) continue;
    else if ( !( ')'.includes(char) ) ) tracker.push(char);
    else if (')'.includes(char)  ) {
      if (tracker[tracker.length - 1] === '(') {
        tracker.pop();
      }
    }
  }

  if (tracker.length === 0) return true;
  else false;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);