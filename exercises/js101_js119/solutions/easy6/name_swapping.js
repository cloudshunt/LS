/**
 * 
 */

// function swapName(name) {
//   return name.split(' ').reverse().join(', ');
// }
// swapName('Joe Roberts');    // "Roberts, Joe"


function swapNameIncludesMiddleName(name) {
  let nameArr = name.split(' ');
  let lastName = nameArr[nameArr.length - 1];


  let firstAndMiddleName = nameArr.slice(0,nameArr.length - 1).join(' ');
  console.log(firstAndMiddleName);
  console.log(lastName + ', ' + firstAndMiddleName);
  //return lastName + ', ' + firstAndMiddleName;
}

swapNameIncludesMiddleName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"