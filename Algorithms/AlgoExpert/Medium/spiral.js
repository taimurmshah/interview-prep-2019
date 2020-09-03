const spiralTraverse = matrix => {
  const res = [];

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

const test = [[1, 2, 3, 4], [10, 11, 12, 5], [9, 8, 7, 6]];

console.log(spiralTraverse(test));
