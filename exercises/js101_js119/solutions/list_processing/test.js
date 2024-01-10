let x = [1, 2, 3];

let result = x.reduce((accu, curVal) => {
  console.log(`accu: ${accu}, curVal: ${curVal}`);
  let add = accu + curVal;
  return add;
})

console.log(result);