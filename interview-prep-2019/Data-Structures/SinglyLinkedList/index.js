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

  //if length = 1... isn't this a special case?
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
}

let list = new SinglyLinkedList();
list.push("yo");
list.push("what's");
list.push("good");
list.push("today");
list.push("ma");
