//Binary Heaps

//use an array to track the tree structure.
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  //the value of any node's parent is going to be
  //the (index - 1)/2, rounded down.
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  /* children will be found @ 2(index) + 1 && 2(index) + 2 */
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
    return children;
  }

  //this function returns the child of greater value.
  greaterChildIndex(index) {
    if (this.values.length <= 1) return undefined;
    if (this.values.length === 2) return 1;
    let left = this.values[2 * index + 1];
    let right = this.values[2 * index + 2];
    if (left && right) {
      return !!(left > right) ? 2 * index + 1 : 2 * index + 2;
    } else if (!right) {
      return 2 * index + 1;
    }
  }
  //pushes into array, then value bubbles until
  //correct location is found
  insert(value) {
    this.values.push(value);
    if (this.values.length === 1) return this;
    let childIndex = this.values.length - 1;
    let parentIndex = this.getParentIndex(childIndex);
    while (this.values[childIndex] && this.values[parentIndex]) {
      if (this.values[childIndex] > this.values[parentIndex]) {
        [this.values[childIndex], this.values[parentIndex]] = [
          this.values[parentIndex],
          this.values[childIndex]
        ];
        childIndex = parentIndex;
        parentIndex = this.getParentIndex(childIndex);
      } else break;
    }
    return this.values;
  }

  //why this works: the next largest value is, by definition, going
  //to be a child of the value i just popped off. So, the best thing
  //to place the next highest value at the head. if I take the last value,
  //and bring it to the top, and then bubble and swap it all the way down,
  //everything will be in it's right place.
  extractMax() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) {
      return this.values.shift();
    }
    //this is what will be returned; saving it so that function
    // can rebalance the heap before returning the value
    let removedValue = this.values.shift();
    //placing the last value in the array at the head. why?
    this.values.unshift(this.values.pop());
    //why this?
    let sunkIndex = 0;
    //finding the child node with greater value
    let bigKidIndex = this.greaterChildIndex(sunkIndex);
    //while the new smaller value is less than it's child, swap
    // them, and then replace the value of sunkIndex to the one
    // I just swappped with.
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
// maxHeap.insert(31);
// maxHeap.insert(2);
// maxHeap.insert(21);

/*~~~~~~~~~~~~~Priority Queue~~~~~~~~~~~~~*/

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    if (this.values.length === 0) return this.values;
    let childIndex = this.values.length - 1;
    let parentIndex = this.getParentIndex(childIndex);
    while (this.values[childIndex] && this.values[parentIndex]) {
      if (
        this.values[childIndex].priority < this.values[parentIndex].priority
      ) {
        [this.values[childIndex], this.values[parentIndex]] = [
          this.values[parentIndex],
          this.values[childIndex]
        ];
        childIndex = parentIndex;
        parentIndex = this.getParentIndex(childIndex);
      } else break;
    }
    return this.values;
  }

  higherPriorityChild(index) {
    if (this.length <= 1) return null;
    if (this.length === 2) return 1;
    let left = this.values[2 * index + 1];
    let right = this.values[2 * index + 2];
    if (left && right) {
      return left.priority < right.priority ? 2 * index + 1 : 2 * index + 2;
    } else if (!right) {
      return 2 * index + 1;
    } else return null;
  }

  dequeue() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) {
      console.log(this.values);
      return this.values.shift();
    }
    let removedValue = this.values.shift();
    this.values.unshift(this.values.pop());
    let currentValue = 0;
    let highPriorityChild = this.higherPriorityChild(currentValue);
    while (this.values[currentValue] && this.values[highPriorityChild]) {
      if (
        this.values[currentValue].priority >
        this.values[highPriorityChild].priority
      ) {
        [this.values[currentValue], this.values[highPriorityChild]] = [
          this.values[highPriorityChild],
          this.values[currentValue]
        ];
        currentValue = highPriorityChild;
        highPriorityChild = this.higherPriorityChild(currentValue);
      } else break;
    }
    console.log(this.values);
    return removedValue;
  }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("a", 6);
priorityQueue.enqueue("e", 5);
priorityQueue.enqueue("i", 4);
priorityQueue.enqueue("o", 3);
priorityQueue.enqueue("u", 2);
priorityQueue.enqueue("y", 1);
