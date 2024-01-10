/**
 * input: array (nums)
 * output: num
 * 
 * 
 * explicit:
 * round down to integer
 * 
 * Algo
 * 
 * Set sum = 0
 * 
 * LOOP array
 *  increament sum by curNum
 * 
 * return sum / arr.length <<< round down
 */

function average(arr) {
  // my solution
  // let sum = 0;

  // arr.forEach((num) => {
  //   sum += num;
  // });

  // return Math.floor( sum / arr.length );

  //use REDUCE

  let sum = arr.reduce((accu, curVal) => {
    return accu + curVal;
  }, 0);

  return Math.floor( sum / arr.length );
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40