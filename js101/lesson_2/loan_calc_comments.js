/*
requirements:

Given the following
- loan amount
- APR
- loan duration

Calculate:
- monthly interest rate
- loan duration in months

Formula: let m = p * (j / (1 - Math.pow((1 + j), (-n))));
m = monthly payment
p = loan amount
j = monthly interest rate
n = loan duration in months

use descriptive variable names

print amount with cents and dollar sign ex: $12.50

NEED: ask for code review after reviewing my code against the solution

Hints:

Decide what input formats your program expects. For example,
should the user enter an interest rate of 5% as 5 or .05?

If you're working with an Annual Percentage Rate (APR),
you need to convert it to a monthly interest rate for use in the formula.

Be careful about the loan duration -- are you working with months or years?
Choose variable names carefully to assist in remembering.

Think about edge cases. There are plenty of edge cases to work with in this problem,
and each presents interesting challenges. For instance, consider whether you want to
support no-interest loans or loans that aren't for an integer number of years.

You can use this loan calculator to check your results.
*/

/*
My PEDAC approach to understanding the question better


Need to understand the calculation, which requires
2 to 3 test cases to confirm.

Input:
p = loan amount (number, float)

j = monthly interest rate (number, integer or float)
  Ex: 12% interest rate, user input 12, and I'll convert it to
      its corresponding float, which is 0.12
      OR
      6.5% interest rate, user input 6.5 and I'll convert it to
      0.065
      ^^^ require its own function for conversion

n = loan duration in months (number, int OR float?)
  User will input amount of months, I will prompt them to do so.


Output: monthly payment amount(string)

require readline sync
Cases:
- calculate on excel to make sure my calculation is correct
Edge Cases:
- what if I enter 0 for interest? will run a seperate function for 0 interest 
calculator
- Think of any invalid entry and force the person to re-enter the amount

*/
