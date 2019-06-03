//ES2015 swapping syntax.
let swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

/* Bubble sort is a sorting algorithm in which the largest value
 * per each iteration bubbles to the end of the array, in place.
 * the way it works is that two elements are constantly being compared:
 * the element at index j, and the element at index j+1. Each loop, the
 * largest value will by definition become the final value in the array;
 * after each loop, the array-length over which the loop is running will
 * decrement by one, starting at array.length. if the conditional in the
 * nested loop runs, the boolean variable noSwaps is set to false, which
 * forces the loop to run again.*/
let bubbleSort = array => {
  let noSwaps;
  for (let i = array.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
};
//tests:
bubbleSort([5, 4, 3, 2, 1]);
bubbleSort([99, 1, 98, 2, 97, 3]);

let selectionSort = array => {
  let lowestValue;
  for (let i = 0; i < array.length; i++) {
    lowestValue = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowestValue]) {
        lowestValue = j;
      }
    }
    if (i !== lowestValue) swap(array, i, lowestValue);
  }
  return array;
};
// to test: put some lowest values in the beginning (in place)
selectionSort([0, 2, 34, 22, 10, 19, 17]);
selectionSort([99, 1, 98, 2, 97, 3]);

//i really need to study insertionSort, it's not clicking for me.
let insertionSort = array => {
  let storedValue;
  let insertionIndex;
  for (let i = 1; i < array.length; i++) {
    storedValue = array[i];
    for (let j = i - 1; j >= 0 && array[j] > storedValue; j--) {
      array[j + 1] = array[j];
      insertionIndex = j;
    }
    if (array[insertionIndex] > storedValue) {
      array[insertionIndex] = storedValue;
    }
  }
  return array;
};
// insertionSort([2, 1, 9, 76, 4]);

let merge = (array1, array2) => {
  let j = 0;
  let i = 0;
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
  if (array.length <= 1) {
    return array;
  } else {
    let middle = Math.round((array.length - 1) / 2);
    // array.slice(0, middle) & array.slice(middle)
    let array1 = mergeSort(array.slice(0, middle));
    let array2 = mergeSort(array.slice(middle));
    return merge(array1, array2);
  }
};

let pivot = (array, start = 0, end = array.length - 1) => {
  let pivot = array[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (array[i] < pivot) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  swap(array, start, swapIndex);
  return swapIndex;
};

let quickSort = (array, start = 0, end = array.length - 1) => {
  if (start < end) {
    let index = pivot(array, start, end);
    quickSort(array, start, index - 1);
    quickSort(array, index + 1, end);
  }
  return array;
};

let getDigit = (number, index) => {
  return Math.floor(Math.abs(number) / Math.pow(10, index)) % 10;
};

let digitCount = number => {
  if (number === 0) return 1;
  else return Math.floor(Math.log10(Math.abs(number))) + 1;
};

let mostDigits = array => {
  let numberOfDigits = 0;
  for (let i = 0; i < array.length; i++) {
    numberOfDigits = Math.max(numberOfDigits, digitCount(array[i]));
  }
  return numberOfDigits;
};

let radixSort = array => {
  let loopAmount = mostDigits(array);
  for (let i = 0; i < loopAmount; i++) {
    let boxes = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < array.length; j++) {
      let currentDigit = getDigit(array[j], i);
      boxes[currentDigit].push(array[j]);
    }
    array = [].concat(...boxes);
    //study this line before interviews.
  }
  return array;
};
