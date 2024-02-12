function bubbleSort(arr) {
  for (let idx = 0; idx < arr.length - 1; idx++) {
    for (let jdx = 0; jdx < arr.length - 1; jdx++) {
      if(arr[jdx] > arr[jdx + 1]) {
        [arr[jdx], arr[jdx + 1]] = [arr[jdx + 1], arr[jdx]];
        // let tempLeftEle = arr[jdx];
        // arr[jdx] = arr[jdx + 1];
        // arr[jdx + 1] = tempLeftEle;
      } 

    }
  }
}


let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]