/*
 * Given an array arr of distinct integers and a nonnegative integer k,
 * write a function findPairsWithGivenDifference that returns an array
 * of all pairs [x,y] in arr, such that x - y = k. If no such pairs exist,
 * return an empty array.
 * */

/*
input:  arr = [0, -1, -2, 2, 1], k = 1
output: [[1, 0], [0, -1], [-1, -2], [2, 1]]

input:  arr = [1, 7, 5, 3, 32, 17, 12], k = 17
output: []

*/

let findPairsWithGivenDifference = (array, k) => {
  let map = {};
  let res = [];
  for (let i = 0; i < array.length; i++) {
    map[array[i]] = true;
  }

  for (let i = 0; i < array.length; i++) {
    let y = array[i];
    let x = y + k;

    if (map[x]) res.push([x, y]);
  }

  return res;
};

// console.log(findPairsWithGivenDifference([0, -1, -2, 2, 1], 1));
