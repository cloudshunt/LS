/*
  PEDAC
  input: string
  output: string

  Question in my own words:
    Given string,
    return new string where all consecutive duplicate
    characters are reduce into a single character
  
  Explicit:
    empty string returns empty string
  
  Algorithm:

  SET dupChar variable
  SET resultWords = ""
  Iterate through the string: (curChar is the current char)
    IF dupChar is not curChar
      resultWords = resultWords concates curChar
      dupChar = curChar
    ELSE IF dupChar is curChar
      CONTINUE LOOP
 */

function crunch(str) {
  let dupChar;
  let result = "";

  for (let curChar of str) {
    if (dupChar !== curChar) {
      result += curChar;
      dupChar = curChar;
    } else if (dupChar === curChar) {
      continue;
    }
  }

  console.log(result);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

/*
Further exploration:
 we check if the next char is same as current
 char, if it is continue, if it's the last char
 of the consecutive duplicate char, then it will
 update crunchText

 when we go beyond the string, it will return `undefined` value
 and add the last char to `crunchText`

 If we stop iterating when idx equal to `text.length -`
  we won't be checking the last character


RegEx challenge:

 */