/**
 * input arr1 arr2
 * output arr3 
 * 
 * Algorithm:
 * since we want an alternate input
 * 
 * SET resultArr
 * do a generic loop,
 *  append arr1[currentIdx] to resultARR
 *  append arr2[currentIdx] to resultArr
 * 
 * RETURN resultARR;
 * 
 * 
 */

function interleave(arr1, arr2) {
  // MY ANSWER
  // let resultArr = [];
  // for (let idx = 0; idx < arr1.length; idx += 1) {
  //   resultArr.push(arr1[idx]);
  //   resultArr.push(arr2[idx]);
  // }

  // return resultArr;

  //USE forEach
  let resultArr = [];
  arr1.forEach((arr1Value, idx) => {
    resultArr.push(arr1Value, arr2[idx]);
  });

  return resultArr;

}


interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

