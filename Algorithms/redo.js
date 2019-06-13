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
