/**
 * input num
 * output num
 * 
 * 
 */

function sum(num) {
  let strNumArr = String(num).split('');
  let result = strNumArr.reduce((accu, curNum) => {
    return accu + Number(curNum);
  }, 0);
  console.log(result);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
