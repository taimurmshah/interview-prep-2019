/*  https://www.algoexpert.io/questions/Monotonic%20Array  */

const test = array => {
  let i = 0,
    j = 1;
  while (array[i] === array[j] && j < array.length) {
    i++;
    j++;
  }
  if (j === array.length) return true;
  return array[0] < array[1];
};

const isMonotonic = array => {
  debugger;
  if (array.length <= 2) return true;

  if (test(array)) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) return false;
    }
  } else {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) return false;
    }
  }

  return true;
};

// console.log(isMonotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11]));
