const solution = (array, k) => {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    max = Math.max(max, array[i]);
  }

  array = array.map((n, i) => convert(n, array.length, max, k, i));
  for (let i = 0; i < array.length; i++) {
    if (i === 0 || i % k === 0) {
      array[i] = createLine(array.length, k, max) + array[i];
    } else if (i === array.length - 1 && (i + 1) % k > 0) {
      array[i] += createLine(array.length, (i + 1) % k, max);
    } else if (i === array.length - 1) {
      array[i] += createLine(array.length, k, max);
    }
  }
  return array.join("");
};

const convert = (n, arrLen, max, k, i) => {
  max = max.toString().length;
  let str = n.toString();
  while (str.length < max) str = " " + str;
  if (i % k === 0) {
    str = "|" + str + "|";
  } else if (i === arrLen - 1 /*&& arrLen < k*/) {
    str += "|\n";
  } else {
    str = str + "|";
  }
  if ((i + 1) % k === 0) str += "\n";
  return str;
};

const createLine = (arrLen, k, max) => {
  max = max.toString().length;
  let line = "-".repeat(max) + "+";
  if (arrLen < k) line = "+" + line.repeat(arrLen);
  else {
    line = "+" + line.repeat(k);
  }
  line += "\n";
  return line;
};

console.log(solution([4, 35, 80, 123, 12345, 44, 8, 5], 10));
console.log(solution([4, 35, 80, 123, 12345, 44, 8, 5, 2, 4, 6], 4));
console.log(solution([4, 35, 80, 123, 12345, 44, 8, 5, 2, 4, 6, 8], 4));
