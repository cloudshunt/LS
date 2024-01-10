/*

Question in my words:
if input num is positive, return negative of that num
if input num is negative, return as is

IF string(inputNum)[0] equal to "-":
  RETURN inputNum
ELSE
  RETURN inputNum * -1
*/

function negative(inputNum) {
  // if (String(inputNum)[0] === '-') return inputNum;
  // else return inputNum * -1;

  //ternary answer
  return String(inputNum)[0] === '-' ? inputNum : inputNum * -1;
}

console.log(negative(5));// -5
console.log(negative(-3));// -3
console.log(negative(0));// -0


