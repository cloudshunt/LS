/*
input: str1 str2
output: comboStr

explicit:
- assume strs are dif lengths
implicit:
- there can be empty str

Question in my own words (mental model)
Give 2 strs, determine which string is shorter
and return a concatinate string of
"shortStr" + "longStr" + "shortStr"

Cases:
given in example, ez
Edge cases: n/a

Data structure: N/A
Algo:

SET function takes to string (str1, str2)
  if str1's length > str2's:
    return st2 + str1 + str2
  else if str2's length > str2's:
    return st1 + str2 + str1

*/

// 13 min spent on PEDAC


function shortLongShort(str1, str2){
  if (str1.length > str2.length){
    return str2 + str1 + str2;
  } else if (str2.length > str1.length){
    return str1 + str2 + str1;
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh")
console.log(shortLongShort('', 'xyz')); // "xyz"

// 4min 30 sec on code

