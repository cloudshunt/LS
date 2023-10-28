function capitalize(str){
  let arr = str.split(' ');
  
  let capitlizeFirstWordArr = arr.map((word) => {
    let capitalLetter = word[0].toUpperCase()
    let remainStr = word.substring(1, word.length);
    return capitalLetter + remainStr;
  })

  let result =capitlizeFirstWordArr.join(' ');
  return result;
}

console.log(capitalize('bob is cool'))