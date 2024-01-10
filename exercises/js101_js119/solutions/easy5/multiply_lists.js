/**
 * input arr1 arr2
 * output arr3
 * 
 * 
 * Algorithm:
 * SET resultArr = []
 * 
 * generic LOOP:
 *  SET product = arr1[curIdx] * arr2[curIdx]
 *  resultArr.push(product)
 */

function multiplyList(arr1, arr2) {
  let resultArr = [];

  for (let idx = 0; idx < arr1.length; idx += 1) {
    let product = arr1[idx] * arr2[idx];
    resultArr.push(product);
  }

  return resultArr;
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]