/*--------------------------------------------------------------------------------------------------------------------*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  //I think this works, I'll have to test it.
  getChildrenValues(i) {
    if (this.values.length <= 1) {
      return undefined;
    }
    let children = [];
    let left = this.values[2 * i + 1];
    let right = this.values[2 * i + 2];
    if (left) children.push(left);
    if (right) children.push(right);
    return children;
  }

  getParentIndex(i) {
    if (this.values.length <= 1) return undefined;
    return Math.floor((i - 1) / 2);
  }

  getIndexOfLargerChild(i) {
    if (this.values.length <= 1) return undefined;
    let leftIndex = 2 * i + 1;
    let rightIndex = 2 * i + 2;
    if (this.values[leftIndex] && this.values[rightIndex]) {
      return this.values[leftIndex] > this.values[rightIndex]
        ? leftIndex
        : rightIndex;
    } else if (this.values[leftIndex]) return leftIndex;
  }

  insert(value) {
    this.values.push(value);
    if (this.values.length === 1) return this;
    let childIndex = this.values.length - 1;
    let parentIndex = this.getParentIndex(childIndex);
    while (this.values[parentIndex] && this.values[childIndex]) {
      if (this.values[childIndex] > this.values[parentIndex]) {
        swap(this.values, childIndex, parentIndex);
        childIndex = parentIndex;
        parentIndex = this.getParentIndex(childIndex);
      } else break;
    }
    return this.values;
  }

  //think about a smaller value sinking to it's new correct spot
  getMaxValue() {
    if (this.values.length === 0) return undefined;
    if (this.values.length === 1) return this.values.shift();
    let removedValue = this.values.shift();
    this.values.unshift(this.values.pop());
    let sunkIndex = 0;
    let bigKidIndex = this.getIndexOfLargerChild(sunkIndex);
    while (this.values[sunkIndex] < this.values[bigKidIndex]) {
      swap(this.values, sunkIndex, bigKidIndex);
      sunkIndex = bigKidIndex;
      bigKidIndex = this.getIndexOfLargerChild(sunkIndex);
    }
    return removedValue;
  }
}
