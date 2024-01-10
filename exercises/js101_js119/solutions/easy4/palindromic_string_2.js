// Need review
function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join('');
  return str === reversedStr;
}

function isRealPalindrome(str) {
  str = removeNoneLetterNum(str.toLowerCase());
  return isPalindrome(str);
}

function removeNoneLetterNum(str) {
  let strResult = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    if ( isAlphaNumeric(str[idx])) {
      strResult += str[idx];
    }
  }

  return strResult;
}

function isAlphaNumeric(char) {
  return ("0" <= char && char <= "9") ||
         ("a" <= char && char <= "z");
}


console.log(isRealPalindrome('madam'));
console.log(isRealPalindrome('Madam'));
console.log(isRealPalindrome("Madam, I'm Adam"));
console.log(isRealPalindrome('356653'));
console.log(isRealPalindrome('356a653'));
console.log(isRealPalindrome('123ab321'));

// isRealPalindrome('madam');               // true
// isRealPalindrome('Madam');               // true (case does not matter)
// isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
// isRealPalindrome('356653');              // true
// isRealPalindrome('356a653');             // true
// isRealPalindrome('123ab321');            // false