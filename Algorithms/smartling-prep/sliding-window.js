//given an array of integers and a number, write a function called maxSubarraySum,
//which finds the maximum sum of a subarray with the length of the number passed
//to the function.
//Note that a subarray must consist of consecutive elements from the original array
let maxSubarraySum = (array, number) => {
  if (number > array.length) return undefined;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < number; i++) {
    tempSum += array[i];
  }
  for (let i = number; i < array.length; i++) {
    tempSum = tempSum - array[i - number] + array[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};
