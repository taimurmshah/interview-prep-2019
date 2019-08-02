//write a function called averagePair. Given a sorted array of
//integers and a target average, determine if there is a pair
//of values in the array where the average of the pair equals
//the target average. there may be more than one pair that matches
//the average target.
let averagePair = (array, target) => {
  if (array.length < 1) return false;
  if (target > array[array.length - 1] || target < array[0]) return false;
  let min = 0;
  let max = array.length - 1;
  let average;
  while (min < max) {
    average = (array[min] + array[max]) / 2;
    if (average > target) --max;
    else if (average < target) ++min;
    else return true;
  }
  return false;
};

//write a function called isSubsequence which takes in two strings
//and checks whether tha characters in the first string form a
//subsequence of the characters in the second string. In other words,
//the function should check whether the characters in the first string
//appear somewhere in the second string, without their order changing.
let isSubsequence = (string1, string2) => {
  if (string1.length > string2.length) return false;
  let i = 0;
  let j = 0;
  while (j < string2.length) {
    if (string1[i] !== string2[j]) {
      j++;
    } else if (i === string1.length - 1) return true;
    else if (string1[i] === string2[j]) {
      i++;
      j++;
    }
  }
  return false;
};
