/**
 * input: str
 * output: arr ["str num", "str1 num1" , etc...]
 * 
 * 
 * ALGO
 *  SET resultArr = []
 * 
 *  SPLIT inputStr into arr (splitArr) to
 *   form indivudal words as an element
 * 
 * LOOP through splitArr
 *  resultArr append 'curWord' + ' ' + curWord.length
 * 
 * 
 */

function wordLengths(inputStr) {
  let resultArr = [];
  if (!inputStr || inputStr.length === 0) {
    return resultArr;
  }

  inputStr.split(' ').forEach((word) => {
    resultArr.push(`${word} ${word.length}`);
  });

  return resultArr;
}

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []