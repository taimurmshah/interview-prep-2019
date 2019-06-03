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
