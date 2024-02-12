// 16 minutes, but with gpt to learn about set
/*
Agenda:
- find if a str contains chars from a ~ z at least once
- NOT case sensitive

Input: str
Output:boolean
Rules:
- There are spaces and punctuations.


Algo:
 - create a new string, make it into inputStr lower case and filter
 out non-alphabatical characters
 
 - put the strings into a set as seperate values
 
 - count the set's length. If length is 24, then return true else false
 
*/


// other approach would be to sort the newStrArr and convert it back to a stirng
// and see if it matches 'a~z', if so return true
function isPangram(string) {
  const ALPHATBET_AMT = 26;

  let newStrArr = string.toLowerCase().split('').filter((char) => {
    return 'a' <= char && char <= 'z';
  });

  const mySet = new Set([...newStrArr]);
  return mySet.size === ALPHATBET_AMT;
}


/*
A pangram is a sentence that contains every single letter of the alphabet at least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. Ignore numbers and punctuation.
*/
// test cases
console.log(isPangram("The quick brown fox jumps over the lazy dog."));// true
console.log(isPangram("This is not a pangram."));// false
