/*
input: 1 ~ 99
output:
1
3
5
7
....
97
99

explicit req:
- inclusive 1 ~99
- Log odd numbers
- each number on a seperate line
implicit requ:
- None

Problem in my own words (mental model):
- Given number from 1 ~ 99 (inclusive)
log all odd numbers on a separate lin

- test case: for loop 1~99 or while loop 1~99
- I listed the test case input and output above already
- edge cases: None, only one type of input

- Data strucutre : none needed
- Algo: run a loop, increment, if moduler 2 = 1, then it's odd
then log normally

- Psudo code without needing any syntax:
set `num` variable as 1
loop, end condition is when num > 99.
  if num % 2 equals 1, this means its an odd number.
    print odd number

- manually test psudo code
set `num` variable as 1 // num is 1 // 
loop, end condition is when num > 99. increment num by 1 // num is 1 // num + 1, num is 2//
  if num % 2 equals 1, this means its an odd number. // (num)1 % 2 = 1 // (num)2 % 2 = 0, skip if
    print odd number // print 1 //

*/

// for (let num = 1; num < 100; num+=1){
//   if (num % 2 === 1){
//     console.log(num);
//   }
// }

// console.log('seperater ------')

let num = 1;
while(num < 100){
  console.log(num);
  num+=2;
}