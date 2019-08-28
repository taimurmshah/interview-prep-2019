let judgeCircle = moves => {
  let count = {
    up: 0,
    left: 0
  };
  moves = moves.split("");

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "U") ++count["up"];
    if (moves[i] === "D") --count["up"];
    if (moves[i] === "L") ++count["left"];
    if (moves[i] === "R") --count["left"];
  }

  return count["up"] === 0 && count["left"] === 0;
};
