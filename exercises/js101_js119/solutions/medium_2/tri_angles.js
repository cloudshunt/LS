// easy, should test along the way to make sure things are correct


/*
Rules:
- sum of angles EQUAL 180
- each angle > 0
- If above 2 conditions aren't met,
it's invalid triangle

- RETURN 'acute' if all angles < 90
- RETURN 'obtuse' if one angle > 90
- RETURN `right` if an angle EQUAL 90
(note, right and obtuse can't coexist)


- RETURN invalid if conditions aren't met

Input: int1 int2 int3
output: str

Algo:
--big picture--
- put the inputs in an array
- use guard clause to check array for invalid
cases, if invalid return `invalid`
- loop through the array and check each number
to see if they meet certain condition,
if it does, return the string name

IF at any point, curNum is 
--end of big picture--

details:
SET numArr = [num1, num2, num3]

GUARD:
IF numArr includes 0 RETURN invalid
IF numArr sum > 180 RETURN invalid (reduce)

LOOP numArr:
 IF angle > 90, return obtuse
 ELSE IF angle EQUAL 90, return right


//b.c all angles are less than 90 (loop didn't catch any)
RETURN acute

 */

function triangle(num1, num2, num3) {
  let numArr = [num1, num2, num3];

  if (numArr.includes(0)) return 'invalid';

  let totalAngle = numArr.reduce((total, curNum) => total + curNum, 0);
  if (totalAngle !== 180) return 'invalid';

  for (let angle of numArr) {
    if (angle > 90) return 'obtuse';
    else if (angle === 90) return 'right';
  }

  return 'acute';

}

console.log(triangle(60, 70, 50)); // a
console.log(triangle(30, 90, 60)); // r
console.log(triangle(120, 50, 10)); // o
console.log(triangle(0, 90, 90)); // invlaid
console.log(triangle(50, 50, 50)); // invalid