function wordSizes(str) {
  if (str === '') return {};
  else str = eliminateNonLetters(str);

  let resultObj = {};
  let strArr = str.split(' ');

  strArr.forEach((letter) => {
    let len = letter.length;

    if (resultObj[len]) {
      resultObj[len] += 1;
    } else {
      resultObj[len] = 1;
    }

  });

  return resultObj;
}

function eliminateNonLetters(sentence) {
  let resultSentence = "";
  for (let idx = 0; idx < sentence.length; idx += 1) {
    if (isLetter(sentence[idx])) {
      resultSentence += sentence[idx];
    }
  }

  return resultSentence;
}

function isLetter(char) {
  char = char.toLowerCase();
  return ('a' <= char && char <= 'z') || char === ' ';
}


console.log(wordSizes('Four score and seven.'));  // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));  // {}