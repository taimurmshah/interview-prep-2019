//Binary Heaps

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  getParent(index) {
    let newIndex = Math.floor((index - 1) / 2);

    return newIndex;
  }

  getChildren(index) {
    let children = [];
    if (this.values.length <= 1) return undefined;
    if (this.values.length === 2) {
      children.push(this.values[1]);
      return children;
    }
    children.push(this.values[2 * index + 1]);
    children.push(this.values[2 * index + 2]);
    return children;
  }

  getChildrenIndices(index) {
    let children = [];
    if (this.values.length <= 1) return undefined;
    if (this.values.length === 2) {
      children.push(1);
      return children;
    }
    children.push(2 * index + 1);
    children.push(2 * index + 2);
  }

  greaterChildIndex(index) {
    if (this.values.length <= 1) return undefined;
    if (this.values.length === 2) return 1;
    let left = this.values[2 * index + 1];
    let right = this.values[2 * index + 2];
    return !!(left > right) ? 2 * index + 1 : 2 * index + 2;
  }
  //pushes into array, then value bubbles until
  //correct value is found
  insert(value) {
    this.values.push(value);
    if (this.values.length === 1) return this;
    let childIndex = this.values.length - 1;
    let parentIndex = this.getParent(childIndex);
    while (this.values[childIndex] > this.values[parentIndex]) {
      [this.values[childIndex], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[childIndex]
      ];
      childIndex = parentIndex;
      parentIndex = this.getParent(childIndex);
    }
    return this.values;
  }

  extractMax() {
    if (this.values.length === 0) return null;
    let removedValue = this.values.shift();
    if (this.values.length === 1) {
      console.log("new heap:", this.values);
      return removedValue;
    }
    this.values.unshift(this.values.pop());
    let sunkIndex = 0;
    let bigKidIndex = this.greaterChildIndex(sunkIndex);
    while (this.values[sunkIndex] < this.values[bigKidIndex]) {
      [this.values[sunkIndex], this.values[bigKidIndex]] = [
        this.values[bigKidIndex],
        this.values[sunkIndex]
      ];
      sunkIndex = bigKidIndex;
      bigKidIndex = this.greaterChildIndex(sunkIndex);
    }
    console.log("new heap:", this.values);
    return removedValue;
  }
}

let maxHeap = new MaxBinaryHeap();

maxHeap.insert(100);
maxHeap.insert(32);
maxHeap.insert(23);
maxHeap.insert(17);
maxHeap.insert(31);
maxHeap.insert(2);
maxHeap.insert(21);
