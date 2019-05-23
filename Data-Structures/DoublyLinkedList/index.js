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

  unshift(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let value;
    if (index < Math.round(this.length / 2)) {
      value = this.tail;
      counter = this.length - 1;
      while (counter > index) {
        value = value.previous;
        counter--;
      }
    } else {
      value = this.head;
      while (counter < index) {
        value = value.next;
        counter++;
      }
    }
    return value;
  }

  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.value = value;
      return true;
    } else {
      return false;
    }
  }

  insert(index, value) {
    let newNode = new Node(value);
    if (index < 0 || index > this.length) return null;
    let front;
    let behind;
    if (index === 0) {
      list.unshift(value);
    } else if (index === this.length) {
      list.push(value);
    } else {
      front = this.get(index);
      behind = this.get(index - 1);
      newNode.next = front;
      front.previous = newNode;
      newNode.previous = behind;
      behind.next = newNode;
      this.length++;
    }
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    let value;
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      value = this.get(index);
      value.previous.next = value.next;
      value.next.previous = value.previous;
      this.length--;
      return value;
    }
  }
}

let first = new Node(13);
//
let list = new DoublyLinkedList();
list.push("yo");
list.push("my");
list.push("g");
list.push("whats");
list.push("really");
list.push("good");
list.push("and");
list.push("shit");
list.push("?");
