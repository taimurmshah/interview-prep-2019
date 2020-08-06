/* https://www.algoexpert.io/questions/Min%20Number%20Of%20Coins%20For%20Change */
//is it sorted??
const minNumberOfCoinsForChange = (n, denoms) => {
  if (n === 0) return 0;
  denoms.sort((a, b) => a - b);
  let ways = new Array(n + 1).fill(0);
  for (d of denoms) {
    for (let i = 1; i < ways.length; i++) {
      if (i >= d) {
        if (i % d === 0) {
          ways[i] = i / d;
        } else if (i % d > 0 && ways[i - d] > 0) {
          let newVal = ways[d] + ways[i - d];
          ways[i] = Math.min(ways[i], newVal);
        }
      }
    }
  }
  return ways[n] === 0 ? -1 : ways[n];
};

// console.log(minNumberOfCoinsForChange(7, [1, 5, 10]));
/*
console.log(minNumberOfCoinsForChange(135, [39, 45, 130, 40, 4, 1, 60, 75]));
*/
