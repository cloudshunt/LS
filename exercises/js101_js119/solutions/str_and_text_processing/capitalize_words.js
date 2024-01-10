/**
 * 
 * Algo:
 * 
 * 
 */

function wordCap(sentence) {
  let result = sentence.split(' ').
    map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).
    join(' ');

  console.log(result);
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
