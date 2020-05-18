/* https://www.algoexpert.io/questions/Min%20Height%20BST */
const minHeightBst = array => {
  let absMid = Math.ceil((array.length - 1) / 2);
  let root = new BST(array[absMid]);
  const helper = (min, max) => {
    if (max - min === 1) {
      root.insert(array[min]);
      root.insert(array[max]);
      return;
    }
    if (min === max) {
      root.insert(array[min]);
      return;
    }
    let middle = min + Math.ceil((max - min) / 2);
    root.insert(array[middle]);
    helper(min, middle - 1);
    helper(middle + 1, max);
  };

  if (array.length === 2) {
    root.insert(array[0]);
  }

  if (array.length > 2) {
    helper(0, absMid - 1);
    helper(absMid + 1, array.length - 1);
  }

  return root;
};

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
  }
}

console.log("min height BST:");

console.log(minHeightBst([1, 2, 5, 7, 10, 13, 14, 15]));
