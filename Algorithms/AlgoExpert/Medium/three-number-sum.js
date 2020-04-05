/*  https://www.algoexpert.io/questions/Three%20Number%20Sum  */
const threeNumberSum = (array, target) => {
  const res = [];

  array = array.sort((a, b) => a - b);

  for (let i = 0; i < array.length - 2; i++) {
    debugger;
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      let sum = array[i] + array[left] + array[right];
      if (sum < target) left++;
      else if (sum > target) right--;
      else {
        res.push([array[i], array[left], array[right]]);
        left++;
        right--;
      }
    }
  }

  return res;
};

//all tests passing!
