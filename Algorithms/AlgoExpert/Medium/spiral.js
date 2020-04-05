/*  https://www.algoexpert.io/questions/Spiral%20Traverse  */

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

// console.log(spiralTraverse([[1]]));
