// NEED review once, with a one liners
// Review Date:

// PEDA process
// P
// 1. read and understand question, and look at input output
// input: integer(positive,negative or zero),
// ouput: bool
// 2. identify problem domain
//  identify odd numbers
// 3. example to confirm my identified problem domain is correct
//  looked at input, and the out put fits the frame of odd numbers
// 4. implicit requirements?
//  Don't notice any
// 5. question clarifications
// Just repeating back to make sure I get the question correctly
// 6. mental mode
/*
Given integer
convert to absolute value
Identify number is odd or not
return true if num is odd
return false if num is even
*/
//E
// use examples to validate my model
// input 2, output false
// input 5, output true
// input -17, output true
// input 0, output false (0 might need it's own case)
// Deal with edge cases
// input -0. output false
// input 999999, output true

// D
// no data structure required
// A: convert mental model to written algo structure
// convert given Int into absolute value, 
//and assign to `absInt` variable
// check if the INT is 0, odd or even
// if absInt===0, return false
// if absInt%2 === 0, return false
// if absInt%3 === 0, return true
// -- test manually with test cases.


function isOdd(num){
  absNum = Math.abs(num);

  if (absNum === 0){
    return false;
  } else if (absNum % 2 === 0){
    return false;
  } else {
    return true;
  }
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true


//Post attempt oddNum % 3 === 1, I can use that to deal with 
// odd number problem domain





