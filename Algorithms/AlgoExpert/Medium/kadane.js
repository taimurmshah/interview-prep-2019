/* https://www.algoexpert.io/questions/Kadane's%20Algorithm */

const kadanesAlgorithm = array => {
  let dynamo = new Array(array.length);
  dynamo[0] = array[0];
  let maxVal = array[0],
    maxIndex = 0;
  for (let i = 1; i < array.length; i++) {
    dynamo[i] = Math.max(array[i], dynamo[i - 1] + array[i]);
    if (dynamo[i] >= maxVal) {
      maxVal = dynamo[i];
      maxIndex = i;
    }
  }
  return maxVal;
};

// console.log(kadanesAlgorithm([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]));
//[-10, -2, -7, -4, -4, -2, -5, -1, -2, -3]
