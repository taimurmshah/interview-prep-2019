/*  https://www.algoexpert.io/questions/Smallest%20Difference  */

const smallestDifference = (one, two) => {
  one.sort((a, b) => a - b);
  two.sort((a, b) => a - b);

  let diff = Infinity;

  let res = [];

  let i = 0,
    j = 0;

  while (i < one.length && j < two.length) {
    const localDiff = Math.abs(one[i] - two[j]);

    if (localDiff < diff) {
      diff = localDiff;
      res = [one[i], two[j]];
    }

    if (one[i] > two[j]) j++;
    else i++;
  }

  return res;
};

// console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
