/* https://www.algoexpert.io/questions/Longest%20Peak */

const longestPeak = array => {
  if (array.length < 3) return undefined;
  let length = 0;
  /*
  my idea is to do a sliding window of three variables
  - I want to start with one variable, i, and another, j, and send j out hunting.
  - j will check if the next variable is greater than the current one
    - if so, j++
    - if not, i = j + 1, and restart.
  - if once j hits a "peak," i'll send out the variable k to check if they're descending.
  - once k reaches a number for which the next one isn't less than, i'll calculate the length by
    taking the absolute value from i to k, then set i to k + 1, and restart.
  - CONDITION: if length < 3, return 0 or undefined, or just set a check for this.
  */

  let i = 0,
    j = 0,
    k = 0;
  while (k < array.length || i < array.length) {
    // debugger;
    if (array[i + 1] > array[i]) j = i + 1;
    else {
      i = i + 1;
      continue;
    }

    while (array[j + 1] > array[j]) {
      j++;
    }

    //peak should've been hit by now; if the next number isn't less than, we're restarting the loop
    //at the next number
    k = j + 1;
    if (array[k] >= array[j]) {
      i = j + 1;
      continue;
    }

    while (array[k + 1] < array[k]) {
      k++;
    }

    length = Math.max(length, Math.abs(k - i));
  }

  return length;
};

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));
