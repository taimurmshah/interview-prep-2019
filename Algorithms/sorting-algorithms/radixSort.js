/*
non-comparison sort
what do i know?
- it only works on numbers, i think only on integers... maybe even positive integers
- it places numbers in arrays based on the digit at a current location in the number;
   - the zeroth place, tenth, hundreth, etc.
- initializes with an array with 10 subarrays, one for each integer a number can have
    at the chosen location for checking.
 */

let getDigit = (place, number) => {
  let string = number.toString();
  if (place >= string.length) return 0;
  return parseInt(string[string.length - place - 1]);
};

let numOfDigits = number => {
  if (number === 0) return 0;
  number = Math.abs(number);
  return Math.floor(Math.log(number) * Math.LOG10E + 1);
};

let maxDigit = array => {
  if (array.numOfDigits === 0) return undefined;
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    max = Math.max(max, numOfDigits(array[i]));
  }
  return max;
};

let radixSort = array => {
  let max = maxDigit(array);
  let buckets;
  for (let j = 0; j < max; j++) {
    //the line below creates an array with 10 subarrays,
    // and the mapfn specified what to return in each array
    buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < array.length; i++) {
      //pushing the number into the correct bucket
      //by getting it's value @ index: j
      buckets[getDigit(j, array[i])].push(array[i]);
    }
    //memorize this line... creating a new array and concat/spread
    //the values in buckets into it!
    array = [].concat(...buckets);
  }
  return array;
};
