/*
This one took alot of thinking, i was doing the iterative approach.
which requires alot of testing, and tracking multiple things

at last 7 minutes I thought about using split....
I wonder if i'm able to do mostly iterative approach but fall under time 
limit

 */

/* // took 57 minutes
Input: str
Output: arr[answerSubString, amount of time it occur(int)]

RULES
- answerSubString is derived from:
  The entire inputStr should be composed of
  answerSubString * answerAmountOftimes.
  (asnwerSubString needs to be the least amount
    amount of times it occurs needs to be the most amt of times
  )

Algo:
BIG PIC:
  -get each sub string from left to right
  -after getting each substring, test to see if it matches
  all subsequent substring of the string.
  - after every match i have a Counter that counts the amount of times
  that it matches
  - If substring comparision is able to reach to the end, out of range
  then I found my match, return counter
  - If the current substring doesn't match any subsequent substrings,
  reset counter to 0, and continue to get the next substring to repeat
  the comparison process
  
Details:
SET counter = 0
1. get sub strings:
Outer Loop: (start idx 0 till last idx)
  get substring (idx0 ~ currIdx + 1) [split]

2. Check if subString matches other segments:
  Inner LOOP: (idx=0, while idx < str.length)
    
    
    get segement by (innerIdx ~ innerIdx + substring length) [split]
    IF substring EQUAL segment:
      counter increment by 1
      innerIdx increment by substring length
    ELSE:
      counter set to 0
      break out of inner loop
      
    IF innerIdx > str.length: // cehck to see if reach result
      RETURN [substring, counter]
    

    



*/

function f(s) {
  let counter = 0;
  
  for (let idx = 0; idx < s.length; idx++) {
   let substr = s.slice(0, idx + 1);
    let substrArr = s.split(substr);
    if ((substrArr.length - 1) * substr.length === s.length) {
      return [substr, substrArr.length -1 ];
    }
//     let jdx = 0;
//       while(true) {
//         let otherSubStr = s.slice(jdx, jdx + substr.length);
//         if (substr === otherSubStr) {
//           counter += 1;
//           jdx+= substr.length;
//         } else {
//           counter = 0;
//           break;
//         }
        
//         if (jdx > s.length) {
//           return [substr, counter];
//         }
        
        
//       }
//   }
  }
}