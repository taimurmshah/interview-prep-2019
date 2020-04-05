/* https://www.algoexpert.io/questions/Move%20Element%20To%20End */

const swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

const moveElementToEnd = (array, num) => {
  let i = 0,
    j = array.length - 1;
  while (i < j) {
    if (array[i] === num && array[j] !== num) {
      swap(array, i, j);
      i++;
      j--;
    } else if (array[i] === num && array[j] === num) {
      j--;
    } else if (array[i] !== num && array[j] === num) {
      j--;
      i++;
    } else if (array[i] !== num && array[j] !== num) {
      i++;
    }
  }
  return array;
};
