const longestPeak = array => {
  if (array.length < 3) return 0;
  let length = 0;
  let i = 0,
    j = 0,
    k = 0;
  while (k < array.length) {
    k = i + 1;
    if (array[i + 1] > array[i]) j = i + 1;
    else {
      i = i + 1;
      continue;
    }
    while (array[j + 1] > array[j]) {
      j++;
    }
    k = j + 1;
    if (k === array.length) continue;
    if (array[k] >= array[j]) {
      i = k;
      continue;
    }
    while (array[k + 1] < array[k]) k++;
    length = Math.max(length, Math.abs(i - k) + 1);
    i = k;
  }
  return length;
};

// console.log("yer");
//
console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));
