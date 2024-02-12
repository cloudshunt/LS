// solved in 28 min mark
// Next Featured Number Higher than a Given Value

// Feedback to self:
// Instead of sorting
// and scan to check next numb
// I can also create empty obj
// check if key is in obj
//     if so, return false
// if key not in obj
//     obj add num as key, and whatever thing
//     as value.

/*
Rules:
~ featured num:
  - odd num that is multiple of 7
  - All digits occur only once.
  EX: 49 is featured num
  EX: 133 is not(it's multiple of 7 but 3 occured twice)
- All inputs will be int

Agenda:
  Given a num, return next featured number
  that is > than input num.
  If there isn't featured num that comes next,
  return error message
Input: int
Output: int OR str

Algo:
Big picture
===
1. identifying a featured number with those 
two conditions

2. increment the input num in a way where
I can try to find featured numbers

===
Details:

increment in a way to find featured nums:
increment input num 1 at a time (last resort)


Might make this a helper function:
logic for identifying featured numbers:
2 condtions:
  1. multiple of 7. (inputNum % 7 EQUAL 0)
  2. all digits can only occur once
    - convert curNum to str:
    - Logic: find if there are duplicate str


Logic: find if there are duplicate char in a str:
  - sort the str // so all same name will be side by side
  - loop through it and see if the cur element is the
  same as the next element. (end 1 element before the last)
  If found dup, then this is not a featured number
  IF loop through everything, nothing occurs, then
  it is a featured number

 */

function featured(num) {

  while (true) {
    num += 1;
    if (num % 7 === 0 && noDuplicates(num) && num % 2 === 1) {
      return num;
    } else if (num > 9876543201) {
      return "no possible numbers";
    }
  }

}

function noDuplicates(num) {
  num = String(num);
  let numArr = num.split('').sort();

  for (let idx = 0; idx < numArr.length - 1; idx++) {
    if (numArr[idx] === numArr[idx + 1]) return false;
  }

  return true;
}


console.log(featured(12));
console.log(featured(20));
console.log(featured(21));
console.log(featured(997));
console.log(featured(1029));
console.log(featured(999999));
console.log(featured(999999987));
console.log(featured(9876543186));
console.log(featured(9876543200));
console.log(featured(9876543201));