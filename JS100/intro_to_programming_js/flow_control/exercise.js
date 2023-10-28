// function evenOrOdd(num){
//   if (!Number.isInteger(num)){
//     console.log('Not a num, done')
//     return
//   }
//   if (num % 2 === 0){ console.log('even')}
//   else {console.log('odd')}
// }

// evenOrOdd(NaN);

// if (foo() === true){
//   return 'bar'
// } else{
//   return 'no bar'
// }


function func(num){
  if (0 <= num <= 50){
    console.log(`${num} is between 0 and 50`);
  } else if (num <= 100){
    console.log(`${num} is between 51 and 100`);
  } else {
    console.log(`${num} is larger than 100`);
  }
}

func(1)
func(51)
func(101)