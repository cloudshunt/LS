function catAge(humanYears){
  switch(humanYears){
    case 0:
      console.log(0);
      break;
    case 1:
      console.log(15);
      break;
    case 2:
      console.log(24);
      break;
    default:
      let age = 24 + ( (humanYears - 2) * 4);
      console.log(age);
      break;
  }
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32