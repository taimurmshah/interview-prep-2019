/*  https://www.algoexpert.io/questions/Number%20Of%20Ways%20To%20Make%20Change  */

const numberOfWaysToMakeChange = (n, denoms) => {
  let ways = new Array(n + 1).fill(0);
  ways[0] = 1;
  for (d of denoms) {
    for (let i = 0; i < ways.length; i++) {
      if (i >= d) {
        ways[i] += ways[i - d];
      }
    }
  }
  return ways[ways.length - 1];
};

// console.log(numberOfWaysToMakeChange(6, [1, 5]));
