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

  print() {
    for (let i = 0; i < this.length; i++) {
      console.log(this.get(i).value);
    }
    return true;
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
      value.next = null;
      value.previous = null;
      this.length--;
      return value;
    }
  }

  reverse() {
    if (this.length === 0) return undefined;
    if (this.length === 1) return this;
    // this.print();
    if (this.length === 2) {
      this.head.previous = this.head.next;
      this.tail.next = this.tail.previous;
      this.head = this.tail;
      this.tail = this.head.next;
      // this.print();
      return this;
    }
    let i = 0;
    let j = this.length - 1;

    let one;
    let two;

    while (j >= i) {
      if (i === 0 && j === this.length - 1) {
        this.head.previous = this.head.next;
        one = this.head.next;
        this.head.next = null;

        this.tail.next = this.tail.previous;
        two = this.tail.previous;
        this.tail.previous = null;

        this.tail = one.previous;
        this.head = two.next;

        i++;
        j--;
      } else if (i === j) {
        two = one.next;
        one.next = one.previous;
        one.previous = two;

        i++;
        j--;
      } else {
        let three;
        let four;

        three = one.next;
        one.next = one.previous;
        one.previous = three;

        four = two.previous;
        two.previous = two.next;
        two.next = four;

        one = one.previous;
        two = two.next;

        i++;
        j--;
      }
    }
    // this.print();
    return this;
  }
}

let test = new DoublyLinkedList();
test
  .push(5)
  .push(10)
  .push(15)
  .push(20);

let one = new DoublyLinkedList().push("one");

let two = new DoublyLinkedList();
two.push("yo");
two.push("dude");

let three = new DoublyLinkedList();
three.push("yo");
three.push("my");
three.push("dude");
//
let nine = new DoublyLinkedList();
nine.push("yo");
nine.push("my");
nine.push("g");
nine.push("whats");
nine.push("really");
nine.push("good");
nine.push("and");
nine.push("shit");
nine.push("?");

let ten = new DoublyLinkedList();
ten.push("yo");
ten.push("my");
ten.push("g");
ten.push("whats");
ten.push("really");
ten.push("good");
ten.push("and");
ten.push("shit");
ten.push("dude");
ten.push("?");

let four = new DoublyLinkedList();
four.push("yo");
four.push("whats");
four.push("good");
four.push("dude");

/* reverse() {
  if (this.length <= 1) return undefined;
  if (this.length === 2) {
    this.head.previous = this.tail;
    this.tail.next = this.head;
    this.head = this.tail;
    this.tail = this.head.next;
    this.head.previous = null;
    this.tail.next = null;
    this.print();
    return this;
  }
  let one;
  let two;
  let i = 0;
  let j = this.length - 1;
  while (j >= i) {
    if (i === 0 && j === this.length - 1) {
      one = this.head.next;
      two = this.tail.previous;
      this.head.previous = this.head.next;
      this.tail.next = this.tail.previous;
      this.head.next = null;
      this.tail.previous = null;
      this.tail = one.previous;
      this.head = two.next;
      i++;
      j--;
    } else if (j > i) {
      let three;
      let four;
      one = this.get(i);
      two = this.get(j);
      three = one.next;
      one.next = one.previous;
      one.previous = three;
      four = two.previous;
      two.previous = two.next;
      two.next = four;
      i++;
      j--;
    } else {
      one = this.get(i);
      two = one.next;
      one.next = one.previous;
      one.previous = two;
      i++;
      j--;
    }
  }
  this.print();
  return this;
}
*/
