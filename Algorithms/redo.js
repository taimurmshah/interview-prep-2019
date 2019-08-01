let swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

//merge sort:

let merge = (array1, array2) => {
  let i = 0;
  let j = 0;
  let mergedArray = [];
  while (i < array1.length || j < array2.length) {
    if (array1[i] < array2[j]) {
      mergedArray.push(array1[i]);
      i++;
    } else if (array2[j] < array1[i]) {
      mergedArray.push(array2[j]);
      j++;
    } else if (array1[i] === array2[j]) {
      mergedArray.push(array1[i]);
      mergedArray.push(array2[j]);
      i++;
      j++;
    } else if (i === array1.length) {
      mergedArray.push(array2[j]);
      j++;
    } else {
      mergedArray.push(array1[i]);
      i++;
    }
  }
  return mergedArray;
};

let mergeSort = array => {
  if (array.length <= 1) return array;
  let middle = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, middle));
  let right = mergeSort(array.slice(middle));
  return merge(left, right);
};

// console.log(mergeSort([5, 3, 7, 9, 1]));
// console.log(mergeSort([3, 2, 1]));
// console.log(mergeSort([1]));
// console.log(mergeSort([100, 99, 2, 1, -1, -100]));

//quick sort
//confused about default for end below; should it be array.length OR array.length -1?
let pivot = (array, start = 0, end = array.length - 1) => {
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (array[i] < array[start]) {
      swapIndex++;
      swap(array, i, swapIndex);
    }
  }
  swap(array, start, swapIndex);

  return swapIndex;
};

// console.log(pivot([5, 7, 3, 4, 9]));

let quickSort = (array, start = 0, end = array.length - 1) => {
  if (start < end) {
    let pivotIndex = pivot(array, start, end);
    quickSort(array, start, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, end);
  }
  return array;
};
//
// console.log(quickSort([5, 7, 3, 9, 1]));
// console.log(quickSort([5, 5, 7, 6, 6, 2, -100]));
// console.log(quickSort([1]));
// console.log(quickSort([]));

//  i   j                      k
//[-1, 11, 12, -13, 25, -1, 0, 1];

//[[-1, 0, 1], [12, 1, -13]]
//[1, 0]
//given an array of numbers, return an array of unique triplets that add up to 0.
let threeSum = array => {
  let result = [];
  if (array.length < 3) return result;

  array = array.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) return result;
    if (array[i] === array[i + 1]) continue;

    for (let j = i + 1, k = array.length - 1; j < k; ) {
      while (j < k) {
        if (array[i] + array[j] + array[k] === 0) {
          result.push([array[i], array[j], array[k]]);
          j++;
          k--;
          while (j < k && array[j] === array[j + 1]) j++;
          while (j < k && array[k] === array[k + 1]) k--;
        } else if (array[i] + array[j] + array[k] > 0) k--;
        else j++;
      }
    }
  }
  return result;
};

//console.log(threeSum([-1, 11, 12, -13, 25, -1, 0, 1]));

//longest substring palindrome
//any letter in the string can be the middle of a palindrome
//even number palindromes have double-letter middles
//odd have single letter middles

let getCenter = (string, index) => {
  let left = index,
    right = index;
  while (right <= string.length && string[left] === string[right + 1]) {
    right++;
  }
  return [left, right];
};

let expandBounds = (string, left, right) => {
  while (
    left >= 0 &&
    right <= string.length &&
    string[left] === string[right]
  ) {
    left = left - 1;
    right = right + 1;
  }
  return [++left, --right];
};

let longestPalindrome = string => {
  string = string.toLowerCase();
  let start = 0,
    end = 0;
  //try to find indices of middle; can be tracked by an array.
  let center, bounds;

  for (let i = 0; i < string.length; i++) {
    center = getCenter(string, i);
    bounds = expandBounds(string, center[0], center[1]);
    if (bounds[1] - bounds[0] > end - start) {
      start = bounds[0];
      end = bounds[1];
    }
  }
  return string.substring(start, end + 1);
};

//create function that takes in a string and reverses the string in place.
//well, strings are immutable in JS... so i need to create an array, then use "multiple pointers" to reverse the string in place.

let reverseString = array => {
  let reversed = [],
    i = array.length - 1;

  debugger;
  while (i >= 0) {
    reversed.push(array[i]);
    i--;
  }
  return reversed;
};
//tests:
//longestPalindrome("abba")
//longestPalindrome("b")
//longestPalindrome("color")
//longestPalindrome("talat")
//longestPalindrome("tallat")


