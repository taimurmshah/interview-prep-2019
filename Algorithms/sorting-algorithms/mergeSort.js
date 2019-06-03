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
      // remember, with while loops, i will actually reach array.length; it needs to be above the conditional in order for it to break out of the loop.
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
    let array1 = mergeSort(array.slice(0, middle));
    let array2 = mergeSort(array.slice(middle));
    return merge(array1, array2);
  }
};
