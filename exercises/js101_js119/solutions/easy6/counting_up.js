/**
 * 
 */

function sequence(num) {
  let resultArr = [];
  resultArr.length = num;
  console.log(resultArr);
  resultArr.forEach((x) => console.log(x));
  // for (let idx = 1; idx <= num; idx += 1) {
  //   resultArr.push(idx);
  // }
  // return resultArr;

}
sequence(5);    // [1, 2, 3, 4, 5]
// sequence(3);    // [1, 2, 3]
// sequence(1);    // [1]