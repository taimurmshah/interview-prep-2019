/*WORD SEARCH*/
//https://leetcode.com/problems/word-search/

let capitalize = word => {
  word = word.split("");
  word = word.map(letter => letter.toUpperCase());
  return word.join("");
};

let makeTable = board => {
  let table = {};
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let currentLetter = board[i][j];
      if (!table[currentLetter]) {
        table[currentLetter] = [[i, j]];
      } else table[currentLetter].push([i, j]);
    }
  }
  return table;
};

let adjacent = (pos1, pos2) => {
  const x1 = pos1[0];
  const x2 = pos2[0];
  const y1 = pos1[1];
  const y2 = pos2[1];
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  if (distance === 1 || distance === 0) return true;
  else return false;
};

let areEqual = (pos1, pos2) => {
  if (pos1.length !== pos2.length) return false;
  for (let i = 0; i < pos1.length; i++) {
    if (pos1[i] !== pos2[i]) return false;
  }
  return true;
};

let removeCoordinate = (table, key, position) => {
  let objClone = { ...table };
  objClone[key] = table[key].filter(pair => {
    return !areEqual(pair, position);
  });

  return objClone;
};

let wordSearch = (board, word) => {
  let letterTable = makeTable(board);
  let currentLetter = word[0];

  let recursiveDFS = (table, word, position) => {
    word = capitalize(word);
    let currentLetter = word[0];
    if (word.length === 0) return true;
    if (!table[currentLetter]) return false;
    for (let i = 0; i < table[currentLetter].length; i++) {
      if (adjacent(position, table[currentLetter][i])) {
        let currentCoordinates = table[currentLetter][i];
        let newTable = removeCoordinate(
          table,
          currentLetter,
          currentCoordinates
        );
        let subString = word.substr(1, word.length - 1);
        if (recursiveDFS(newTable, subString, currentCoordinates)) {
          return true;
        }
      }
    }
    return false;
  };
  for (let i = 0; i < letterTable[currentLetter].length; i++) {
    if (recursiveDFS(letterTable, word, letterTable[currentLetter][i])) {
      return true;
    }
  }
  return false;
};

/*OPTIMIZED SOLUTION*/

let exist = (board, word) => {
  let wordLength = word.length;
  word = word.split("");

  let test = (i, j, board, wordIndex) => {
    if (
      i < 0 ||
      j < 0 ||
      i >= board.length ||
      j >= board[0].length ||
      word[wordIndex] !== board[i][j] ||
      wordIndex > wordLength
    ) {
      return false;
    }

    //tracking where i've already been.
    board[i][j] = null;
    wordIndex++;
    if (wordIndex === wordLength) return true;
    if (test(i + 1, j, board, wordIndex)) return true;
    if (test(i - 1, j, board, wordIndex)) return true;
    if (test(i, j + 1, board, wordIndex)) return true;
    if (test(i, j - 1, board, wordIndex)) return true;

    //if not the correct path, put the letter back;
    board[i][j] = word[--wordIndex];
    return false;
  };

  //iterate through the entire 2-d array.
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (test(i, j, board, 0)) {
        return true;
      }
    }
  }
  return false;
};
