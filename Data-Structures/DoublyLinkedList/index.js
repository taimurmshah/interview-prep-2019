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
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let popped;
    if (this.length === 0) return undefined;
    else if (this.length === 1) {
      popped = this.tail;
      this.head = null;
      this.tail = null;
    } else {
      popped = this.tail;
      this.tail = this.tail.previous;
      this.tail.next = null;
    }
    this.length--;
    return popped;
  }

  shift() {
    let shifted;
    if (this.length === 0) return undefined;
    else if (this.length === 1) {
      shifted = this.head;
      this.head = null;
      this.tail = null;
    } else {
      shifted = this.head;
      this.head = this.head.next;
      this.head.previous.next = null;
      this.head.previous = null;
    }
    this.length--;
    return shifted;
  }
}

let first = new Node(13);
let list = new DoublyLinkedList();
