//SinglyLinkedLists have three attributes:
//Head, Tail, and Length
//each item in an SLL is called a node; all
//it does is point to the next node.
//The SLL class uses the Node class defined
//below.

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

  printValues(node) {
    if (!node.next) {
      console.log(node.value);
      return;
    } else {
      console.log(node.value);
      return this.printValues(node.next);
    }
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    } else if (this.length === 1) {
      let one = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return one;
    }
    let one = this.head;
    let two = one.next;
    while (two.next) {
      one = two;
      two = two.next;
    }
    one.next = null;
    this.tail = one;
    this.length--;
    console.log(list);
    return two;
  }

  shift() {
    if (!this.head) return undefined;
    else if (this.length === 1) {
      let old = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return old;
    }
    let old = this.head;
    this.head = old.next;
    old.next = null;
    this.length--;
    return old;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) this.head = newNode;
    else {
      let old = this.head;
      newNode.next = old;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length) return undefined;
    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, value) {
    if (index >= this.length) return undefined;
    let nodeToChange = this.get(index);
    nodeToChange.value = value;
    this.printValues(this.head);
    return nodeToChange;
  }

  insert(index, value) {
    if (this.length === 0) {
      console.error(`this list does not contain a value at index ${index}`);
      return undefined;
    }
    if (index >= this.length) return undefined;
    if (this.length === 1) {
      this.unshift(value);
      return this;
    }
    let old = this.get(index);
    let before = this.get(index - 1);
    let newNode = new Node(value);
    before.next = newNode;
    newNode.next = old;
    this.length++;
    this.printValues(this.head);
    return this;
  }

  remove(index) {
    if (index >= this.length) return undefined;
    if (this.length === 0) return undefined;
    if (this.length === 1 || index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      let newHead = this.head.next;
      this.head = newHead;
    }
    let before = this.get(index - 1);
    let nodeToRemove = this.get(index);
    before.next = nodeToRemove.next;
    this.length--;
    this.printValues(this.head);
    return this;
  }

  reverse() {
    let oldNext1;
    let oldNext2;
    let currentValue;
    let count = 0;
    while (count < this.length) {
      if (count === 0) {
        this.tail = this.head;
        currentValue = this.tail.next;
        oldNext1 = this.tail.next.next;
        this.tail.next.next = this.tail;
        console.log("i am in here");
      } else {
        debugger;
      }
      count++;
    }
  }
}

let list = new SinglyLinkedList();
list.push("yo");
list.push("what's");
list.push("good");
list.push("today");
list.push("ma");

let smallList = new SinglyLinkedList();
