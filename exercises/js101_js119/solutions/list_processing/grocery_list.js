/**
 * input: arr [arr1,arr2, etcc...]
 * output: arr
 * 
 * SET resultARR = []
 * LOOP arr:
 *  SET desiredAMT = curARR[1]
 *  SET fruitRepeatStr = desiredAMT * curARR[0]
 *  SET fruitRepeatArr = fruitRepeatStr into an array
 *  resultARR = resultARR concat with fruitRepeatARR
 */


// function buyFruit(groceryArr) {
//   let resultArr = [];
//   for (let itemAndAmount of groceryArr) {
//     let desiredAmt = itemAndAmount[1];
//     let fruitToRepeat = itemAndAmount[0];
//     let repeatedArr = [];
//     for (let count = 1; count <= desiredAmt; count++) {
//       repeatedArr.push(fruitToRepeat);
//     }
//     resultArr = resultArr.concat(repeatedArr);
//   }
//   console.log(resultArr);
// }


function buyFruit(fruitsList) {
  let result = fruitsList.map(fruit => repeat(fruit)).reduce((groceryList, fruit) => groceryList.concat(fruit));
    console.log(result);
}

function repeat(fruitAndQuantity) {
  let result = [];
  let fruit = fruitAndQuantity[0];
  let quantity = fruitAndQuantity[1];

  for (let num = 0; num < quantity; num += 1) {
    result.push(fruit);
  }

  return result;
}
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]