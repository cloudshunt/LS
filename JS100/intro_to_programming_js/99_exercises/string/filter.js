let scores = [96, 47, 113, 89, 100, 102];

let result = scores.reduce((accu, curNum) => {
  if (curNum >= 100){
    accu+=1;
  }
  return accu
}, 0 );

console.log(result);