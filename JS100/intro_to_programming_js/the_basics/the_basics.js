//1.
'Justin' + ' ' + 'C'
//2.
let num = 4936;

let ones = num%10;
num = (num - ones) / 10 ;
let ten = num%10;
num = (num - ten) / 10 ;
let hundreds = num%10;
num = (num - hundreds) / 10 ;
let thousands = (num)%10; 


console.log(thousands, hundreds,ten,ones);

//3.
console.log(typeof 'true')
console.log(typeof false)
console.log(typeof 1.5)
console.log(typeof 2)
console.log(typeof undefined)
console.log(typeof {foo:'bar'})
//4.QUestion answered
//6.
console.log(Number('5')+10);
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`)
//7 if indx is out of range for an array, what will happen? A: return undefined, but for other languages it will show error, out of range
//8
let names = ['asta','butterscotch','pudding','neptune','darwin'];
console.log(names);
//9
let pets ={
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard'
};

console.log(pets);

