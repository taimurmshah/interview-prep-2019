class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let oldTail = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.previous = oldTail;
    }
    this.length++;
    return this;
  }
}

let first = new Node(13);
let list = new DoublyLinkedList();
