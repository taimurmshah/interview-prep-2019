/* https://www.algoexpert.io/questions/Max%20Subset%20Sum%20No%20Adjacent */

const maxSubsetSumNoAdjacent = array => {
  let max = 0;
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];
  if (array.length === 2) return array[0] > array[1] ? array[0] : array[1];
  let res = new Array(4);
  res[0] = array[0];
  res[1] = array[1];
  res[2] = array[0] + array[2];
  max = res[2] > res[1] ? res[2] : res[1];
  if (array.length === 3) return max;
  for (let i = 3; i < array.length; i++) {
    res[3] = res[1] > res[0] ? array[i] + res[1] : array[i] + res[0];
    max = Math.max(max, res[3]);
    res.shift();
  }
  return max;
};

// console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]));
