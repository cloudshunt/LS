/**
 * input: str
 * output: obj
 * 
 * inplicit:
 *  - non-alphatic string are also considered
 * as part of the word, as long as it's not
 * seperated by space
 * 
 * Algo
 * 
 * SET resultObj = {}
 * 
 * 
 *  get an array with inputString split by space
 * LOOP arr:
 *  SET len = element's length
 * 
 *  Check to see if the len is a key in
 *  resultObj. IF the key is in there, increment
 *  the key's value by one. ELSE IF the key is not
 *  in the object, then add len as key and provide it's
 *  value as one.
 */

function wordSizes(str) {
  if (str === '') return {};

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
console.log(wordSizes('Four score and seven.'));  // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));  // {}