function staggeredCase(inputStr) {
  let resultStr = '';

  for (let idx = 0; idx < inputStr.length; idx++) {
    if (idx % 2 === 0) {
      resultStr += inputStr[idx].toUpperCase();
    } else {
      resultStr += inputStr[idx].toLowerCase();
    }
  }

  console.log(resultStr);
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"