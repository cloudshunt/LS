// More Stuff exe 9
// notice that infinity/-0 = -infinity, I can take advantage of this to figure if a num is - or not

//My solution in 10/19/2023
function isNegZero(num){

  let isNegativeSymbol = String(Infinity/num)[0];

  if (num === 0 && isNegativeSymbol === '-'){
    console.log(true);
  } else {
    console.log(false);
  }
}
isNegZero(0)
