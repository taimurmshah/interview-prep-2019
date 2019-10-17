const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]];
};

class MaxHeap {
  constructor() {
    this.values = [];
    this.finalString = "";
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLargerChild(index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    if (!this.values[left]) return null;
    if (!this.values[right]) return left;
    return this.values[left].length > this.values[right].length ? left : right;
  }

  insert(key, value) {
    let string = "";
    for (let i = 0; i < value; i++) {
      string += key;
    }

    this.values.push(string);
    if (this.values.length === 1) return this.values;

    let childIndex = this.values.length - 1;
    let parentIndex = this.getParentIndex(childIndex);

    while (this.values[childIndex].length > this.values[parentIndex].length) {
      swap(this.values, childIndex, parentIndex);
      childIndex = parentIndex;
      parentIndex = this.getParentIndex(childIndex);
    }
    return this.values;
  }

  accrue(string) {
    let counter = {};
    for (let i = 0; i < string.length; i++) {
      if (!counter[string[i]]) {
        counter[string[i]] = 1;
      } else counter[string[i]]++;
    }
    let keys = Object.keys(counter);
    for (let i = 0; i < keys.length; i++) {
      this.insert(keys[i], counter[keys[i]]);
    }

    while (this.values.length > 0) {
      this.removeFirst();
    }
    return this.finalString;
  }

  removeFirst() {
    let removedValue = this.values.shift();
    if (this.values.length === 0) {
      this.finalString += removedValue;
      return;
    }
    this.values.unshift(this.values.pop());
    let parentIndex = 0;
    let childIndex = this.getLargerChild(parentIndex);
    while (
      this.values[childIndex] &&
      this.values[parentIndex] &&
      this.values[childIndex].length > this.values[parentIndex].length
    ) {
      swap(this.values, childIndex, parentIndex);
      parentIndex = childIndex;
      childIndex = this.getLargerChild(parentIndex);
    }
    this.finalString += removedValue;
  }
}

const frequencySort = string => {
  let heap = new MaxHeap();
  return heap.accrue(string);
};

// console.log(heap.accrue("aaacbcAAb"));
