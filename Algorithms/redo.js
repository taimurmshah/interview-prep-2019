const words = [
  "wheelhouse",
  "",
  "scapethrift",
  "inexplicable",
  "ascetically",
  "jestingly",
  "palindromical",
  "nonintent",
  "nonexertion",
  "bibliomania",
  "defunct",
  "oculus",
  "nt",
  "intercrystallization",
  "institutionalization"
];

const findDuplicates = array => {
  let dict = {};
  //have the key be the duplicate. want to store an array of
  //the index along with the occurrence, starting with 0.
};

const numer = (word, pfxLen = 0) => {
  if (word.length <= 2) return word;
  return (
    word.slice(0, pfxLen + 1) +
    (word.length - (2 + pfxLen)) +
    word[word.length - 1]
  );
};

const transform = (dups, array) => {
  console.log("dups:", dups);
  console.log("w", words);
};

const main = () => {
  const newWords = words.map(w => numer(w));
  let duplicates = findDuplicates(newWords);
  transform(duplicates, newWords);
  return newWords.join("\n");
};

// console.log(main());
// console.log(numer("taimur", 2))

function twoNumberSum(array, targetSum) {
  let res = [];
  let dict = new Map();

  for (let i = 0; i < array.length; i++) {
    let key = array[i];
    if (!dict.has(key)) dict.set(key, true);
  }

  for (let i = 0; i < array.length; i++) {
    let one = array[i];
    let diff = targetSum - one;
    console.log("one:", one, "diff:", diff);

    if (dict.has(diff)) {
      res.push(one);
      res.push(diff);
      break;
    }
  }
  return res;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }
}

const test = new BST(100)
  .insert(15)
  .insert(5)
  .insert(2)
  .insert(1)
  .insert(22)
  .insert(1)
  .insert(1)
  .insert(3)
  .insert(1)
  .insert(1)
  .insert(502)
  .insert(55000)
  .insert(204)
  .insert(205)
  .insert(207)
  .insert(206)
  .insert(208)
  .insert(-51)
  .insert(-403)
  .insert(1001)
  .insert(57)
  .insert(60)
  .insert(4500);

function findClosestValueInBst(tree, target) {
  if (!tree.left && !tree.right) return tree.value;

  let cv = tree.value;
  let cn = tree;
  while (cn.left || cn.right) {
    // debugger;
    if (cn.value === target) return cn.value;
    const diff = Math.abs(cn.value - target);
    if (diff < Math.abs(cv - target)) {
      cv = cn.value;
    }
    if (cn.left && cn.right) {
      cn = target > cn.value ? cn.right : cn.left;
    } else cn = cn.left ? cn.left : cn.right;
  }
  return cv;
}

console.log(findClosestValueInBst(test, 4501));

const arr = [1, 2, 1, 1, 2, 3];

const getDistanceMetrics = array => {};
