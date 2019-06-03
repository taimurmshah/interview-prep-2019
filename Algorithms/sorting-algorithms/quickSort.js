let pivot = (array, start = 0, end = array.length - 1) => {
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (array[i] < array[start]) {
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

// quickSort([5, 3, 1, 9, 7]);
