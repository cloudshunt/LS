function palindromes(inputStr) {
  console.log(substrings(inputStr).filter(palindromeOrNot));
}

function substrings(inputStr) {
  let substrs = [];

  for (let idx in inputStr) {
    let subresult = leadingSubstrings(inputStr.slice(idx, inputStr.length));
    substrs = substrs.concat(subresult);
  }
  return substrs;
}

function leadingSubstrings(str) {
  return str.split('').map((_, index) => str.slice(0, index + 1));

}

function palindromeOrNot(str) {
  if (str.length === 1) return false;
  else return str === str.split('').reverse().join('');
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]