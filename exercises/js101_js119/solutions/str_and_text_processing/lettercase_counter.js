function letterCaseCount(inputStr) {

  let result = {lowercase:0, uppercase:0, neither: 0};

  for (let char of inputStr) {
    if (isAlphabet(char)) {
      if (char.toUpperCase() === char) {
        result.uppercase += 1;
      } else {
        result.lowercase += 1;
      }
    } else {
      result.neither += 1;
    }
  }
  console.log(result);
}
function isAlphabet(char) {
  return ('a' <= char.toLowerCase()) && (char.toLowerCase() <= 'z');
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
