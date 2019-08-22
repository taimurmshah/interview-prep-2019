/* Skyline
 * https://leetcode.com/problems/max-increase-to-keep-city-skyline/
 * */

//2-d array. the value @ grid[i][j] will be the lesser of the two greatest vertical and horizontal values;
//if grid[i][j] represents the intersection of the vertical and horizontal axes, its value will be the lesser
//of the greatest x-axis value and y-axis value.
//i believe the largest this grid can be is 50x50.
//i think I can solve this by DFS:
//  create a variable called "maxSum"
//  iterate through the grid, and for each value, DFS vertically and horizontally to find the lesser great value
//  once the value is found, find the difference between it and the current value @ grid[i][j] and increment maxSum by that difference
//  replace the value @ grid[i][j] with the found value.
//so, i'll have two variables, x-max && y-max, which will

//the recursive function:
//what is changing?
//  indices of the grid.
//what is the basecase?
//  when I've gotten to the end of the vertical and horizontal arrays
//what am I going to return?
//  the greatest value found in that 1-d search
//how can I test the values?
//  feed in the currentValue

let myMaxIncreaseKeepingSkyline = grid => {
  let maxSum = 0;

  let left = (grid, i, j, xMax) => {
    if (j < 0) return xMax;
    xMax = Math.max(xMax, grid[i][j]);
    return left(grid, i, j - 1, xMax);
  };

  let right = (grid, i, j, xMax) => {
    if (j >= grid[0].length) return xMax;
    xMax = Math.max(xMax, grid[i][j]);
    return right(grid, i, j + 1, xMax);
  };

  let up = (grid, i, j, yMax) => {
    if (i < 0) return yMax;
    yMax = Math.max(yMax, grid[i][j]);
    return up(grid, i - 1, j, yMax);
  };

  let down = (grid, i, j, yMax) => {
    if (i >= grid.length) return yMax;
    yMax = Math.max(yMax, grid[i][j]);
    return down(grid, i + 1, j, yMax);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let currentValue = grid[i][j];

      let x = Math.max(
        left(grid, i, j, currentValue),
        right(grid, i, j, currentValue)
      );
      let y = Math.max(
        up(grid, i, j, currentValue),
        down(grid, i, j, currentValue)
      );

      let newValue = Math.min(x, y);

      maxSum += Math.abs(newValue - currentValue);
    }
  }
  return maxSum;
};

//My solution beat... 5% of other submissions... I guess DFS with recursion is not the best way to do this problem.
//Here's a solution from Leetcode that beats 95% of JS solutions:

//this is a fucking beautiful algorithm.
const maxIncreaseKeepingSkyline = grid => {
  let difference = 0;
  let horizontal = []; //corresponds to i
  let vertical = []; // corresponds to j
  for (let i = 0; i < grid.length; i++) {
    //going to be comparing, 0 is the smallest possible value, so set horizontal[i] = 0, then compare from there.
    horizontal[i] = 0;
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0) vertical[j] = 0;

      horizontal[i] = Math.max(horizontal[i], grid[i][j]);
      vertical[j] = Math.max(vertical[j], grid[i][j]);
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let maximum = Math.min(horizontal[i], vertical[j]);
      difference += maximum - grid[i][j];
    }
  }
  return difference;
};
