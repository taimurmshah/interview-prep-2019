/*  https://www.algoexpert.io/questions/Spiral%20Traverse  */

/* there's a way to do this problem by traversing the perimeter of the matrix, and doing that for each level.
 * how would I do that? in this problem, the length of each subarray is assumed (perhaps the definition of a matrix is that
 * it's always a rectangle). If that's true, that means that i and j are fixed. so, at each level, i and j would
 * contract by 1 in the front and one in the back. so what does that look like? So I could treat each perimeter as if
 * there were no inner numbers, and that'd be defined by the method. when i reach the end, i'd start again with the new
 * values for i and j.
 *  */

const spiralTraverse = matrix => {
  const res = [];

  const helper = (i = 0, j = 0, dir = "right") => {
    if (res.length === matrix.length * matrix[0].length) return;

    res.push(matrix[i][j]);
    matrix[i][j] = null;

    if (dir === "right") {
      j === matrix[i].length - 1 || !matrix[i][j + 1]
        ? helper(i + 1, j, "down")
        : helper(i, j + 1);
    }

    if (dir === "down") {
      i === matrix.length - 1 || !matrix[i + 1][j]
        ? helper(i, j - 1, "left")
        : helper(i + 1, j, "down");
    }

    if (dir === "left") {
      j === 0 || !matrix[i][j - 1]
        ? helper(i - 1, j, "up")
        : helper(i, j - 1, "left");
    }

    if (dir === "up") {
      !matrix[i - 1][j] ? helper(i, j + 1) : helper(i - 1, j, "up");
    }
  };

  helper();
  return res;
};

const perimeter = matrix => {
  const res = [];
  //i and j are variables for the array; limits: l for lower and u for upper
  const helper = (
    il = 0,
    iu = matrix.length - 1,
    jl = 0,
    ju = matrix[0].length - 1
  ) => {
    // debugger;
    let i = il,
      j = jl;

    //base cases

    //for center of four numbers; a square matrix with even length
    if (il > iu || jl > ju) return;
    //for one number in center; a square matrix with odd length
    if (il === iu && jl === ju) return res.push(matrix[i][j]);

    //go right; i stays constant and j ++
    while (j < ju) {
      matrix[i][j] && res.push(matrix[i][j]);
      matrix[i][j] = null;
      j++;
    }

    while (i < iu) {
      matrix[i][j] && res.push(matrix[i][j]);
      matrix[i][j] = null;
      i++;
    }

    while (j > jl) {
      matrix[i][j] && res.push(matrix[i][j]);
      matrix[i][j] = null;
      j--;
    }

    while (i > il) {
      matrix[i][j] && res.push(matrix[i][j]);
      matrix[i][j] = null;
      i--;
    }

    helper(il + 1, iu - 1, jl + 1, ju - 1);
  };

  helper();
  return res;
};

// console.log(
//   perimeter([[1, 2, 3], [12, 13, 4], [11, 14, 5], [10, 15, 6], [9, 8, 7]])
// );
