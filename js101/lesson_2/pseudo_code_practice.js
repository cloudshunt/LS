//You don't need to write any JavaScript code here; just practice writing the logic in English.


//Q1: a function that returns the sum of two 
// numbers

/*
Given 2 numbers, num1 & num2.

establish sum variable
sum = num1 + num2

return sum
--fomral--
Given 2 numbers, num1 & num2.

SET sum = num1 + num2
PRINT sum

*/



//Q2:  a function that takes an array of strings, and
// returns a string that is all those strings concatenated together

/*
Given array of strings

set variable as empty string (this will accumlate each string in each iteration)

Iterate through the array:
  - empty string var += cur string in array


Return the variable

-- formal --
Given array of strings called arrStr

SET iterator = 0
SET result = ''

WHILE iterator<arrStr.length
  result += arrStr[iterator]
  iterator += 1

PRINT result

*/


// Q3:a method that takes an array of integers, and returns a new array
// with every other element from the original array, starting with the first element. 
// For instance:  everyOther([1,4,7,2,5]); // => [1,7,5]

/*
Given an array of integers, arrInt

Create an empty arrar, resultArr

loop through arrInt
- append current elemnt's num into resultArr
- increment iterator by 2

return resultARR

--- Formal ---
Given an array of integers, arrInt

SET resultArr = []
SET iterator = 0

WHILE iterator < arrInt length
- append arrInt[iterator] to resultArr
- iterator += 2

PRINT resultARR
*/

/*
Q5:
a function that determines the index of the 3rd occurrence of a given character in a string. 
For instance, if the given character is 'x' and the string is 'axbxcdxex', 
the function should return 6 (the index of the 3rd 'x'). 
If the given character does not occur at least 3 times, return null.
---

input strTarget strLong
output number

GIven a target string to find, strTarget
Given a string to be searched on (could be empty, could not meet criteria), strLong


create an iterator variable and assign 0
create a count variable and assign 0

Loop through strLong, condiiton is iterator < strLong length:
- if current element matches strTarget, count increment by 1
- if count is 3, return iterator
- iterator increment by 1

- return null

--- formal ---
GIven a target string to find, strTarget
Given a string to be searched on (could be empty, could not meet criteria), strLong

Set iterator = 0
Set count = 0

WHILE iterator < strLong length:
  IF strLong[iterator] equal to strTarget
    count += 1
  IF count equals to 3
    return iterator
  
  iterator += 1

return null
*/

/*
Question 6
a function that takes two arrays of numbers and returns the result of merging the arrays. 
The elements of the first array should become the elements at the even indexes of the returned array, 
while the elements of the second array should become the elements at the odd indexes. 
For instance: merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]


Input: arr1[nums], arr2[nums]
Output resultArr

given;
- 1 array with numbers, arr1
- 1 array with number, arr2

set iterator variable as 0
set resultArr variable as []

loop, with condition: iterator < arr1 length
  if iterator is even, append to resultArr
  if iterator is odd, append to resultArr

return resultArr

-- formal --
given;
- 1 array with numbers, arr1
- 1 array with number, arr2

SET iterator variable as 0
SET resultArr variable as []

WHILE iterator < arr1 length
  if iterator % 2 equal to 0
    append arr1[iterator] to resultArr
  ELSE
    append arr2[iterator] to resultArr
  
  iterator += 1

PRINT resultArr

*/
