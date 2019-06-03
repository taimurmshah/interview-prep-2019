let insertionSort = array => {
  let storedValue;
  let insertionIndex;
  let j;
  for (let i = 1; i < array.length; i++) {
    storedValue = array[i];
    j = i - 1;
    while (array[j] > storedValue && j >= 0) {
      array[j + 1] = array[j];
      insertionIndex = j;
      j--;
    }
    if (array[insertionIndex] > storedValue) {
      array[insertionIndex] = storedValue;
    }
  }
  return array;
};
