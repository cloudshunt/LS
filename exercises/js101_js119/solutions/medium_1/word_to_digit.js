/*
Input: str
Output: str

Rules:
- numbers in words are converted to
numbers in integers.

Data Structure:
- store numbers in words a the key
and its corresponding number as the value

Algo:

SET strArr =
Convert str into array, with each word
as an element of the array

SET newArr = []

Loop through the strArr
  ~IF curWord's last element is a punctuation
  get the part that is not the punctuation (0th idx ~ before last element)
  first is the word second is the punctuation

  IF identify the current Word or First Part of punct seperator
    as the key
    then return it's coressponding number which will
    will be appended to a new array
    If it has punc seperater, then concat back then return to array
  


  ELSE append the cur word to the new array

Convert new Arr to string.

 */

const nums = {one:1,two:2,three:3,four:4,five:5,
  six:6,seven:7,eight:8,nine:9,ten:10};


// eslint-disable-next-line max-lines-per-function
function wordToDigit(str) {
  let strArr = str.split(' ');
  let numKeys = Object.keys(nums);

  let resultArr = strArr.map((word) => {
    let lastElePunctuation = !isAlphabat(word[word.length - 1]);

    if (lastElePunctuation) {
      let word1 = word.slice(0, word.length - 1);
      let word2 = word.slice(word.length - 1);
      if (numKeys.includes(word1)) {
        return String(nums[word1]) + word2;
      } else {
        return word;
      }
    }

    if (numKeys.includes(word)) {
      return nums[word];
    } else {
      return word;
    }
  });

  console.log(resultArr.join(' '));
}

function isAlphabat(char) {
  char = char.toLowerCase();
  return 'a' <= char && char <= 'z';
}


wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."