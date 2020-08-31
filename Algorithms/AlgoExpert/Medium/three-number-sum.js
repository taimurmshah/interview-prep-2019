/*  https://www.algoexpert.io/questions/Three%20Number%20Sum  */
const threeNumberSum = (array, targetSum) => {
  const res = [];

  array.sort((a, b) => a - b);
  debugger;
  for (let i = 0; i < array.length; i++) {
    let c = array[i],
      l = i + 1,
      r = array.length - 1;

    while (r > l) {
      let sum = c + array[l] + array[r];
      if (sum > targetSum) r--;
      else if (sum < targetSum) l++;
      else {
        res.push([c, array[l], array[r]]);
        r--;
        l++;
      }
    }
  }
  return res;
};

//all tests passing!
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
