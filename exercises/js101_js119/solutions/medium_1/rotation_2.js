/**
 * understand the problem
 * 
 * ~given a digit:
 *  1 being the last index,
 *  2 being the 2nd index from the last.
 *  3 being the 3rd index from the last.
 * 
 * ex:  987   1 => 7
 *      987   2 => 8
 * ------
 * ~rotate that digit to the end of the number
 * and push the others forward
 * 
 * ex: (987, 1) => 987 (nothing change because moving 
 * last index num to last index)
 * ex2: (987, 2) => 978
 * ^^^    ^ get gets rotate to the last index
 *          and we move 7 forward to 8th original
 *          spot
 * -----
 * 
 * input: (largeNum(a larger number), targetNum(single digit number) )
 * output: num(a transformed num1)
 * 
 * ALGORITHM:
 *  (find target num)
 *  Convert largeNum to str for manipulation
 *   access largeNumStr[largeNum.length - targetNum] will
 *   be the targert char that we want to rotate
 * 
 * How do I rotate?
 * split the string into first half & second half
 * get the second half's first char, remove and concat to the
 * end of second half. Combine first & second half
 * 
 * '7352' '91'
 * 
 * SET secondHalf = 
 *  largeNumStr.slice(largeNumStr.length - targetNum)
 * 
 * SET firstHalf =
 *  largeNumStr.slice(0, largeNumStr.length - targetNum)
 * ---
 * Look at Case if it's very first element
 * 
 * largeNumStr.slice(largeNumStr.length - targetNum)
 * secondHalf = '735291'
 * 
 * firstHalf = largeNumStr.slice(0, 0)
 * 
 * Transform Second half of string
 * secondHalf.slice(1) + secondHalf[0]
 * 
 * and concat firstHalf and secondHalf
 */

function rotateRightmostDigits(num,target) {
  //select target index
  let strNum = String(num);
  let targetIdx = strNum.length - target;

  //split into first and second half
  let firstHalf = strNum.slice(0, targetIdx);
  let secondHalf = strNum.slice(targetIdx);

  //transformation
  let secondHalfTrans = secondHalf.slice(1) + secondHalf[0];
  let result = firstHalf + secondHalfTrans;

  console.log(Number(result));
}
// rotateRightmostDigits(735291, 5);
// console.log('hi');