//[ 3, 5, 6, 3, 3, 5 ]

let identicalPairs = array => {
  if (array.length <= 1) return 0;
  let count = 0,
    key = {};
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    if (!key[current]) key[current] = [i];
    else key[current].push(i);
  }
  let keys = Object.keys(key);
  for (let i = 0; i < keys.length; i++) {
    let length = key[keys[i]].length;
    count += tri(length);
  }
  return count;
};

let tri = n => {
  return (n * (n - 1)) / 2;
};

//identicalPairs([3, 5, 6, 3, 3, 5]);
