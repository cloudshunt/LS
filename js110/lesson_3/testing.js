function joinOr(arr, delimeter = ', ', lastDelimeter = 'or') {
  lastDelimeter = " " + lastDelimeter + " ";
  if (arr.length === 0) return "";
  else if (arr.length === 1) return arr.join();
  else if (arr.length === 2) return arr.join(lastDelimeter);
  else if (arr.length >= 3) {
    let allNumStrExceptLast = arr.slice(0, arr.length - 1).join(delimeter);
    let lastStrNum = arr.slice(arr.length - 1);
    let result = allNumStrExceptLast + lastDelimeter + lastStrNum;
    return result;
  }
}

joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"

/**
 * behavior
 * IF given array empty: result EQUAL ""
 * IF given array length EQUAL 1, return that string num
 * IF given array length EQUAL 2, return string num with OR as delimieter.
 * IF given array length >= 3, return string num with comma as delimeter and the
 * last delimeter as "or"
 * IF given array, 2nd optional argument change delimeter to the 2nd argument
 * the optional 3rd argument will be used as the last delimeter for delimeter
 * before the last element in the array
 */



