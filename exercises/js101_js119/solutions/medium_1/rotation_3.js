/**
 * 1)
 * rotate to the left
 * '7'35291 >> 35291'7'
 * 
 * 2) freeze fist digit, rotate others once
 * |3|'5'2917 >rotate> |3|2917'5' 
 * 
 * 3) freeze first 2 digits, rotate others once
 * |32|'9'175 >rotate> |32|175'9'
 * 
 * 4) freeze first 3 digits, rotate others once
 * |321|'7'59 >rotate>|321|59'7'
 * 
 * 5) freeze first 4 digits, rotate
 * |3215|'9'7 >rotate> |3215|7'9'
 * 
 * 6)??freeze first 5digit, nothing to rotate
 * result 321579
 * 
 * 
 * Input integer
 * Output integer
 * 
 * Algorithm:
 * rotate > freeze 1
 * from freeze +1, rotate > freeze 2
 * ...
 * from
 * 
 * note: freeze target from fist idx
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

  return Number(result);
}

function maxRotation(num) {
  let numLen = String(num).length;
  let resultNum = num;
  for (let idx = numLen; idx > 1; idx--) {
    resultNum = rotateRightmostDigits(resultNum,idx);
  }

  console.log(resultNum);
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845