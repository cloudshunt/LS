let str = 'Captain Ruby';

// becomes [Ruby, Javascript]
let x = str.split(' ') 

//starting at idx 1, remove 1 idx, and inject following str and
// expand the arr index as needed 
x.splice(1, 1, 'JavaScript') 
x.join(',');
console.log(x);

//Internationalization 1

function greet(language){
  //use some sort of built-in method
  // convert english 'hello' into respctive language
  
}