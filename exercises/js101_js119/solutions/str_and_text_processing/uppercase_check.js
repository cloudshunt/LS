/**
 * Algo
 * LOOP through string
 *  If (curChar is not alphabat) continue
 *  ELSE IF (curChar !== curChar upper case )
 *    RETURN fals
 * 
 * return true
 */

function isUppercase(inputStr) {

  for (let char of inputStr) {
    if (!isAlphabet(char)) continue;
    else if (char !== char.toUpperCase()) return false;
  }

  return true;
}

function isAlphabet(char) {
  char = char.toLowerCase();
  return ('a' <= char) && (char <= 'z');
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true