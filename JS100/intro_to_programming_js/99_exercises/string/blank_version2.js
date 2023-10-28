function isBlank(str){
  if(str.trim() === ''){
    console.log(true);
  } else {
    console.log(false);
  }
}

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true
