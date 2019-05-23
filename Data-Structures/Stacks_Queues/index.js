//Stack is more of an abstract idea: LIFO: last in, first out.

//array can be a stack when I'm using push and pop.
//or if I shift and unshift
//the important point is, the more recently it's been added,
//the more recently it will be removed.
//adding/removing from the end is better in terms of big(O)
//because if i add to the beginning, everything will need
//to be reindexed

//more efficient if I use a linkedlist. no need to track
//indices.

//push and pop in stack class are actually shift and unshift.

//insertion and removal are ALWAYS O(1)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Udemy course calls this method push, which is stupid.
  //just know if someone is talking about a SLL/Stack class,
  //if they say push they might really be referencing
  //unshift

  unshift(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.length === 1) {
      newNode.next = this.head;
      this.head = newNode;
      this.tail = newNode.next;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this.length;
  }

  shift() {
    if (this.length === 0) return undefined;
    let removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      this.head = this.head.next;
      this.length--;
    }
    removedNode.next = null;
    return removedNode;
  }
}

let stack = new Stack();

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~ */

//QUEUES

//first in, first out.
//more efficient with SLL, again, bc no need
//for indices

// let queue = []
// queue.push("one")
// queue.push("two")
// queue.push("three")

// queue.shift()
// queue.shift()
// queue.shift()

//best to use push and unshift

class Queue {
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
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this.length;
  }

  unshift() {
    if (this.length === 0) return undefined;
    let removedNode = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    removedNode.next = null;
    return removedNode;
  }
}

let queue = new Queue();
