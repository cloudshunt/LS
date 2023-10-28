/*
PEDAC

INPUT: str
OUPUT: num (int)

EXPLICIT: 
- can use charCodeat()
- 
IMPLICIT:
- '', empty string returns 0 
(if i do charCodeAT() for '', it is NaN)
- assumming input is always a string
- ' ' output is 32

RE-WORD QUESTION:
Given a string, determine the char value for each
character and get the sum of those value.

Case: refer to examples

Edge Case:
- what if input is not str?
- '', empty string returns 0 
(if i do charCodeAT() for '', it is NaN)

Data Structure: N/A
Algo psudeo:
  FUNCTION - SET inputStr as parameter
    //deal with edge case
    IF inputStr equal to '', return 0

    SET sum = 0
    LOOP through inputSTR
      sum += each char's value
    
    RETURN sum

TIME: 20min, thinking about how to put it in
language agnostic psudeo code
*/

//code time: 5min 10sec

function utf16Value(inputStr){
  let sum = 0;
  //deal with edge case
  if (inputStr === ''){return sum}
  
  for (let char of inputStr){
    sum += char.charCodeAt();
  }
  
  return sum;
}

console.log(
  utf16Value('Four score'),         // 984
  utf16Value('Launch School'),      // 1251
  utf16Value('a'),                 // 97
  utf16Value(''),                  // 0
)


// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9"
console.log(OMEGA,          
utf16Value(OMEGA),                 
utf16Value(OMEGA + OMEGA + OMEGA)  )