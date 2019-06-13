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

let maxDigit = array => {
  if (array.length === 0) return undefined;
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    max = Math.max(max, length(array[i]));
  }
  return max;
};

let length = number => {
  if (number === 0) return 0;
  number = Math.abs(number);
  return Math.floor(Math.log(number) * Math.LOG10E + 1);
};

let radixSort = array => {
  let max = maxDigit(array);
  let buckets;
  for (let j = 1; j <= max; j++) {
    buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < array.length; i++) {
      buckets[getDigit(j, array[i])].push(array[i]);
    }
    console.log("j:", j, "buckets:", buckets);
    array = [].concat(...buckets);
  }
  return array;
};
