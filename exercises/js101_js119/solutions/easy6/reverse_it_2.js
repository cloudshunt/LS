/**
 * input: str (one or more words)
 * output: str 
 * 
 * explicit:
 * - 5 or more words, letters get reverse
 *
 * SPLIT inputStr by space into strArr.
 * 
 * SET newSentence = ''
 * LOOP strArr
 *  IF str.length >= 5
 *    reverse str and append to newSetence
 *  ELSE
 *    append str to newSentence
 * 
 * RETURN newSenTENCE
 * 
 * REVERSE STR FUNC (str): I have already
 */


function reverseWords(str) {
  // My first attempt
  // let result = str.split(' ').reduce((result, curWord) => {
  //   if (curWord.length >= 5) return result + reverseStr(curWord) + ' ';
  //   else return result + curWord + ' ';
  // }, '');

  // result = result.trim();
  // console.log(result);

  // exploration question
  let result = str.split(' ').map((word) => {
    if (word.length > 4) return reverseStr(word);
    else return word;
  }).join(' ');

  console.log(result);
}

function reverseStr(str) {
  return str.split('').reverse().join('');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
