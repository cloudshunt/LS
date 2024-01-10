/**
 * ALGORITHM
 * 
 * Input count(int), num(number)
 * SET resultARR = []
 * SET numTracker = 0
 * LOOP, that loops through count amount of time
 *  numTracker = numTracker + num
 *  resultARR appends numTracker
 * 
 * return resultARR
 * 
 */

function sequence(count, num) {
  let resultArr = [];
  let numTracker = 0;

  for (let counter = 1; counter <= count; counter++) {
    numTracker += num;
    resultArr.push(numTracker);
  }
  console.log(resultArr);
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []