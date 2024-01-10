/**
 * Input: positive number
 * Output: arr with seperated numbers
 * 
 * 
 */

function digitList(num) {
  let strNumArr = String(num).split('');

  return strNumArr.map((strNum) => Number(strNum));
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]