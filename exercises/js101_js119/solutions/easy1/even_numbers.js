/*
input: 1~99
output:
2
4
6
etc...
96
98

Explicit requirements:
log even numbers(inclusive)

Implicit requirements:
None

Mental model of the problem (word the problem in my own words)
find even number during iteration, log the number

Test case: given above
Edge cases: None

Data Structure: None
Algorithm: loop, increment by 2 and log num

psudeo code:
set variable `num` = 1
loop, increment by 1 after end of each loop.
  if num % 2 equal to 0, log num

*/

for (let num = 1; num < 99; num+=1){
  if (num % 2 === 0){
    console.log(num)
  }
}