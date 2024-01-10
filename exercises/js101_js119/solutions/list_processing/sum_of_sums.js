/**
 * input: arr (nums)
 * outpout: num
 * 
 * Algo:
 * 
 * 
 * SET total = 0
 * SET endIdx = 1
 * LOOP : condition: endIdx < arr's length
 *  SET segmentTotal = 0
 *  LOOP: from idx 0 ~ endIdx   
 *     segmentTotal += arr[curIdx]
 *      
 *  
 *  total update = total + segmentTotal
 *  endIdx += 1
 *    
 * 
 * SET endIdx = 0
 * SET result = 0;
 * OUTTER LOOP:  endIdx < arr.length
 *  subResult = 0;
 *  INNER LOOP:(from arr[0] ~ arr[endIdx])
 *    subResult += arr[idx]
 *   endIdx += 1
 * 
 *  result += subResult
 */


function sumOfSums(inputArr) {
  let totalSum = 0;

  for (let endIdx = 0; endIdx < inputArr.length; endIdx++) {
    let subResult = 0;

    for (let idx = 0; idx <= endIdx; idx++) {
      subResult += inputArr[idx];
    }
    totalSum += subResult;
  }

  console.log(totalSum);
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35