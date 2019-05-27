//Binary Heaps

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  getParent(index) {
    let newIndex = Math.floor((index - 1) / 2);

    return newIndex;
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
}

let maxHeap = new MaxBinaryHeap();

maxHeap.insert(100);
maxHeap.insert(32);
maxHeap.insert(23);
// maxHeap.insert(17);
// maxHeap.insert(31);
// maxHeap.insert(2);
// maxHeap.insert(21);
