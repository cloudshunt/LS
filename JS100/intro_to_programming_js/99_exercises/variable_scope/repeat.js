function repeat(numOfTimes, str){
  result = '';

  for (let i = 0; i < numOfTimes; i+=1){
    result += str
  }
  
  console.log(result);
}


repeat(3, 'ha'); // 'hahaha'