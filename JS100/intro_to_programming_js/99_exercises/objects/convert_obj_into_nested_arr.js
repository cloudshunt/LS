let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};


let tempArr = [];

for (let prop in person){
  tempArr.push([prop, person[prop]]);
}

console.log(tempArr);

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]