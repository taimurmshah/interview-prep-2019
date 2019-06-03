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
