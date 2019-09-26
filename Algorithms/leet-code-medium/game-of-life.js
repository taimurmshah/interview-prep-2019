//https://leetcode.com/problems/game-of-life/
//[[0, 1, 0],
// [0, 0, 1],
// [1, 1, 1],
// [0, 0, 0]];

let input = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]];

let getNeighbors = (i, j, board) => {
  let count = 0;
  if (i - 1 >= 0 && j - 1 >= 0 && board[i - 1][j - 1] === 1) count++;
  if (i - 1 >= 0 && board[i - 1][j] === 1) count++;
  if (i - 1 >= 0 && j + 1 <= board[i].length - 1 && board[i - 1][j + 1] === 1)
    count++;
  if (j - 1 >= 0 && board[i][j - 1] === 1) count++;
  if (j + 1 <= board[i].length - 1 && board[i][j + 1] === 1) count++;
  if (i + 1 <= board.length - 1 && j - 1 >= 0 && board[i + 1][j - 1] === 1)
    count++;
  if (i + 1 <= board.length - 1 && board[i + 1][j] === 1) count++;
  if (
    i + 1 <= board.length - 1 &&
    j + 1 <= board[i].length - 1 &&
    board[i + 1][j + 1] === 1
  )
    count++;
  return count;
};

let gameOfLife = board => {
  let tracker = {};
  let keyCounter = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      tracker[keyCounter] = {
        coordinates: [i, j],
        neighbors: getNeighbors(i, j, board)
      };
      ++keyCounter;
    }
  }

  for (let k = 0; k < Object.keys(tracker).length; k++) {
    let neighbors = tracker[k].neighbors;
    let i = tracker[k].coordinates[0];
    let j = tracker[k].coordinates[1];
    if (neighbors < 2) board[i][j] = 0;
    else if (neighbors === 3 && board[i][j] === 0) board[i][j] = 1;
    else if (neighbors > 3) board[i][j] = 0;
  }

  return board;
};

// console.log(gameOfLife(input));
