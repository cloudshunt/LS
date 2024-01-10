let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// create a new array with above values with one layer only.
//[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

let result = [];
flintstones.forEach((value) => {
  if (Array.isArray(value)) {
    result.push(value[0], value[1]);
  } else result.push(value);
});
console.log(result);

