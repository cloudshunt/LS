/*
PEDAC:

Input: number(integer)
Output: prints a right triangle

Reqs:
Explicit
Implicit:
  - height is input number of *
  - lowest level has input number of *
  - first level has Input - 1 amount of spaces
    second level has Input - 2 amount of spaces
      .
      .
      .
    etc... last level has Input - Input amount of spaces

Rephrase the question:
- Given Integer, print a right triangle with `*`,
  where the height, base and hypotenuse are the same as
  input Integer.

Data: not req
Algo:

High Level:

Utilize loop to print ' ' and * on each iteration.
the amount of spaces reducs for each iteration
and the amount of * increases for each iteration
until it reaches the input amount of * printed


More detailed:

Input: Int

SET idx = 0
WHILE idx < input:
  SET star = idx + 1
  SET space = input - star

  PRINT (* in star amount) (' ' in space amount)
  idx += 1

quick implementation
can use repeat to print ' ' and *
 */

function triangle(height) {
  for (let idx = 0; idx < height; idx += 1) {
    let starAmt = idx + 1;
    let spaceAmt = height - starAmt;

    console.log(' '.repeat(spaceAmt) + '*'.repeat(starAmt));
  }
}

//triangle(5); // star1 space 4, star2 space0
//triangle(1);
triangle(0);
