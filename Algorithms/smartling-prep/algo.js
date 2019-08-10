let swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

//given two strings, write a function to determine if the second string
//is an anagram of the first.
let validAnagram = (stringOne, stringTwo) => {
  if (stringOne.length !== stringTwo.length) return false;
  let counter = {};
  let letter;
  for (let i = 0; i < stringOne.length; i++) {
    letter = stringOne[i];
    if (!counter[letter]) counter[letter] = 1;
    else ++counter[letter];
  }
  for (let j = 0; j < stringTwo.length; j++) {
    letter = stringTwo[j];
    if (!counter[letter]) return false;
    else --counter[letter];
  }
  return true;
};

// console.log(validAnagram("iceman", "cinema")); //expected: true
// console.log(validAnagram("talat", "talat")); //expected: true
// console.log(validAnagram("talaa", "talat")); //expected: false
// console.log(validAnagram("tal", "at")); //expected: false

//write a function called sumZero which accepts a sorted array of integers.
//The function should find the first pair where the sum is 0. Return an
//array that includes both values that sum to zero or undefined if a pair
//does not exist.
let sumZero = array => {
  if (array.length <= 1) return undefined;
  let i = 0;
  let j = array.length - 1;
  let result = [];
  while (i < j) {
    if (array[i] + array[j] === 0) {
      result.push(array[i]);
      result.push(array[j]);
      return result;
    } else if (array[i] + array[j] > 0) j--;
    else i++;
  }
  return undefined;
};

// console.log(sumZero([])); //expected: undefined
// console.log(sumZero([0, 1, 2])); //expected: undefined
// console.log(sumZero([-1, 0, 1, 2, 3, 4, 5])); //expected: [-1, 1]
// console.log(sumZero([-9, -8, -7, 0, 7, 11, 1003, 10000])); //expected: [-7, 7]

//implement a function called countUniqueValues,
//which accepts a sorted array, and counts the
//unique values in the array. There can be negative
//numbers in the array, but it will always be sorted.

let countUniqueValues = array => {
  let count = 0;
  if (array.length === 0) return count;
  if (array.length === 1) return ++count;
  let i = 0;
  let j = 1;
  while (j < array.length) {
    if (i === 0 && j === 1) ++count;
    if (array[i] === array[j]) j++;
    else {
      ++count;
      i = j;
      j = i + 1;
    }
  }
  return count;
};

// console.log(countUniqueValues([])); //expected: 0
// console.log(countUniqueValues([0, 0, 1, 1, 1, 2, 3, 4, 4, 5])); //expected: 6
// console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 7])); //expected: 7
// console.log(countUniqueValues([1])); //expected: 1

//write a function called maxSubarraySum, which accepts
// an array of integers and a number called n. the function
// should calculate the maximum sum of n consecutive elements
// in the array.

let maxSubarraySum = (array, number) => {
  if (number > array.length) return undefined;
  let maxSum = 0;
  let tempSum = 0;
  //initial maxSum is the sum of first N numbers

  for (let i = 0; i < number; i++) {
    maxSum += array[i];
    tempSum = maxSum;
  }
  //starts @ number, which is one above where we left off.
  //need to subtract the first value and add the new value.
  for (let i = number; i < array.length; i++) {
    tempSum = tempSum - array[i - number] + array[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
// console.log(maxSubarraySum([4, 2, 1, 6, 2], 1)); // 6

//given a sorted array of integers, write a function called search
//that accepts a value and returns the index where the value passed
//to the function is located. If the value is not found, return -1;

let search = (array, value) => {
  // debugger;
  if (array.length === 0) return undefined;
  let left = 0;
  let right = array.length - 1;
  let middle = Math.floor(right / 2);
  if (value > array[right] || value < array[left]) return -1;
  while (left < right) {
    if (array[right] === value) return right;
    if (array[left] === value) return left;
    if (value > array[middle]) {
      left = middle;
      middle = left + Math.floor((right - left) / 2);
    } else if (value < array[middle]) {
      right = middle;
      middle = left + Math.floor((right - left) / 2);
    } else return middle;
  }
  return -1;
};

// let search = (array, value) => {
//   if (array.length === 0) return undefined;
//   let min = 0;
//   let max = array.length - 1;
//   let middle;
//   while (min < max) {
//     middle = Math.floor((min + max) / 2);
//     if (value > array[middle]) min = middle + 1;
//     else if (value < array[middle]) max = middle - 1;
//     else return middle;
//   }
//   return -1;
// };

// console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
// console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
// console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1

// Given an array of integers arr where each element is
// at most k places away from its sorted position, code
// an efficient function sortKMessedArray that sorts arr.
// For instance, for an input array of size 10 and k = 2,
// an element belonging to index 6 in the sorted array will
// be located at either index 4, 5, 6, 7 or 8 in the input array.

class MinHeap {
  constructor() {
    this.values = [];
  }

  getParent(index) {
    if (index === 0) return undefined;
    return Math.floor((index - 1) / 2);
  }

  getChildrenIndices(index) {
    if (this.length === 1) return undefined;
    let children = [];
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    if (right) {
      children.push(left);
      children.push(right);
      return children;
    } else if (left && !right) {
      children.push(left);
      return children;
    } else return undefined;
  }

  smallerChildIndex(index) {
    let children = this.getChildrenIndices(index);
    if (children.length === 1) return children[0];
    return Math.min(children[0], children[1]);
  }

  enqueue(value) {
    this.values.push(value);
    if (this.values.length === 1) return this.values;
    // debugger;
    let newValueIndex = this.values.length - 1;
    let parentIndex = this.getParent(newValueIndex);
    while (this.values[newValueIndex] < this.values[parentIndex]) {
      swap(this.values, parentIndex, newValueIndex);
      newValueIndex = parentIndex;
      parentIndex = this.getParent(newValueIndex);
    }
    return this.values;
  }

  dequeue() {
    if (this.length === 0) return undefined;
    let poppedValue;
    if (this.values.length === 1) {
      poppedValue = this.values.shift();
      this.values = [];
      return poppedValue;
    }
    poppedValue = this.values.shift();
    this.values.unshift(this.values.pop());
    let sinker = 0;
    let child = this.smallerChildIndex(sinker);
    while (this.values[child] < this.values[sinker]) {
      swap(this.values, child, sinker);
      sinker = child;
      child = this.smallerChildIndex(sinker);
    }
    return poppedValue;
  }
}

let sortKMessedArray = (array, k) => {
  let heap = new MinHeap();
  let sorted = [];
  for (let i = 0; i < k + 1; i++) {
    heap.enqueue(array[i]);
  }

  for (let i = k + 1; i < array.length; i++) {
    sorted.push(heap.dequeue());
    heap.enqueue(array[i]);
    console.log("heap.values:", heap.values, "sorted:", sorted);
  }
  while (heap.values.length > 0) {
    sorted.push(heap.dequeue());
    console.log("heap.values:", heap.values, "sorted:", sorted);
  }
  return sorted;
};
