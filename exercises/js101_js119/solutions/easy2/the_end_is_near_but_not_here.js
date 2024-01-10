/*
  Input: String (w/ at least 2 words)(ex: "hello there")
  implicit, there will be space between words
 */

// Further exploration to get the mid word value
// handle any edge cases
/*
Edge cases:
- non string input
- empty string return message indicating so
- 1 string, return the only string
Regular case:
- odd string
- even string (round down) DONE
 */

// didn't add in dealing with non-string
function penultimate(str1) {
  if (str1.trimStart() === '') {
    return 'empty string, invalid entry';
  }

  let strToArr = str1.split(" ");
  let midIdx = Math.ceil(strToArr.length / 2) - 1; // -1 to deal with arr idx start with 0
  console.log(midIdx);

  return strToArr[midIdx];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "School"); // logs true
console.log(penultimate("last word bye") === "word"); // logs true