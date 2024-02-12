/*

Rule:
- Iso, Scal trangle:
  2 shorter sides length combine length
   must be > longest side
- every side length > 0
- if above condition not met, not a valid
triangle

Agenda:
Given 3 input numbers, determine
what type of triangle it is, if not valid
return not valid

Input num1 num2 num3
Output triangle name OR invalid

ALGO:
Big picture, sort he arr in ascending manner
and access the array knowing that the last element
will be the longest length, and use that to do comparison.

SET sortedNumArr =
get a sorted array where we sort the input nums numerically
(ascending order)

Guard clase: 
  if first ele is 0, return invalid
  if (ele1 + ele2) < ele3, return invalid

During comparison: (ele3 is the longest side)
 IF all element same, return Equilateral
 IF ele1 equal ele2, return isosceles
 ELSE return Scalene
 */

function triangle(num1, num2, num3) {
  let sortedNumArr = [num1,num2,num3].sort((a,b) => a - b);

  if (sortedNumArr[0] <= 0) return 'invalid';
  else if ((sortedNumArr[0] + sortedNumArr[1]) < sortedNumArr[2]) return 'invaid';

  if (sortedNumArr[0] === sortedNumArr[1] &&
    sortedNumArr[1] === sortedNumArr[2]) {
    return 'Equilateral';
  } else if (sortedNumArr[0] === sortedNumArr[1] ||
    sortedNumArr[1] === sortedNumArr[2]) {
    return 'isosceles';
  } else {
    return 'Scalene';
  }
}


// triangle(3, 3, 3);        // "equilateral"
// triangle(3, 3, 1.5);      // "isosceles"
// triangle(3, 4, 5);        // "scalene"

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"  1.5 3 3
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); //invalid
console.log(triangle(3, 1, 1)); //invalid