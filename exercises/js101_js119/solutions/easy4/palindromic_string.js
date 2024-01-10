function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join('');
  return str === reversedStr;
}

console.log(isPalindrome('madam')  );
console.log(isPalindrome('Madam') );
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653')  );
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true