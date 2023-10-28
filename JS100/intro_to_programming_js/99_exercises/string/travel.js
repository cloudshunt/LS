function contains(tarlocation, destinations){

  for (let destLocation of destinations){
    if (tarlocation === destLocation){
      return true;
    }
  }

  return false;
}

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];


console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false