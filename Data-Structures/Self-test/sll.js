class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    } else if (this.length === 1) {
      this.head.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
  }

  reverse() {
    if (this.length <= 1) return this;
    if (this.length === 2) {
      this.tail.next = this.head;
      this.head.next = null;
      this.head = this.tail;
      this.tail = this.head.next;
      return this;
    }
    let i = 1;
    let currentNode = this.head;
    let oldNext;
    let savedValue;
    while (i < this.length) {
      if (i === 1) {
        this.tail = currentNode;
        oldNext = currentNode.next;
        savedValue = oldNext.next;
        oldNext.next = currentNode;
        currentNode.next = null;
        currentNode = oldNext;
        i++;
      } else if (i < this.length - 1 && i > 1) {
        oldNext = savedValue;
        savedValue = oldNext.next;
        oldNext.next = currentNode;
        currentNode = oldNext;
        i++;
      } else {
        savedValue.next = currentNode;
        this.head = savedValue;
        i++;
      }
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(3);
list.push(5);
list.push(7);

let twoList = new SinglyLinkedList();
twoList.push(1);
twoList.push(2);

let threeList = new SinglyLinkedList();
threeList.push(1);
threeList.push(2);
threeList.push(3);
