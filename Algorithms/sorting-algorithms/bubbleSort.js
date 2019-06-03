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
