//if info is almost sorted, insertion sort can run in O(n) time.
//How?
let insertionSort = array => {
  let storedValue;
  let insertionIndex;
  let j;
  //create a for loop, with i @ 1. why?
  for (let i = 1; i < array.length; i++) {
    //storing the value.
    storedValue = array[i];
    //j is the previous value; originally @ 0, but always i - 1. why?
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
