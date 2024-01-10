const consonantsArr = [`b`, `c`, `d`, `f`, `g`, `h`, `j`, `k`, `l`,
  `m`, `n`, `p`, `q`, `r`, `s`, `t`, `v`, `w`, `x`, `y`, `z`];

function getAdjConsoCount(str) {
  let noSpaceStr = str.split(' ').join('');
  let count = 0;
  let tempStr = "";

  for (let char of noSpaceStr) {
    if (consonantsArr.includes(char)) tempStr += char; //char is a consonant
    else { // char is a vowel
      if (tempStr.length > 1 && tempStr.length > count) {
        count = tempStr.length;
      }

      tempStr = "";
    }
  }

  return count;
}


console.log(getAdjConsoCount('dddaa')); // 3
console.log(getAdjConsoCount('ccaa'));  // 2
console.log(getAdjConsoCount('baa'));   // 0
console.log(getAdjConsoCount('aa'));    // 0