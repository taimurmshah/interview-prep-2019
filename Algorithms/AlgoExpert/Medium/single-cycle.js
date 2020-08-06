/* https://www.algoexpert.io/questions/Single%20Cycle%20Check */

function hasSingleCycle(array) {
  if (array.length === 0) return false;
  if (array[0] === 0) return false;

  let n = 1;
  let i = 0;
  let mainParent = new Node(array[i], i);
  let parent = mainParent;
  // debugger;
  while (n <= array.length + 1) {
    if (n === array.length + 1) {
      if (i === mainParent.index) {
        parent.next = mainParent;
      }
      n++;
      continue;
    }
    if (i !== 0) {
      parent.next = new Node(array[i], i);
      parent = parent.next;
    }
    /*need to find the right value for i. simple addition or subtraction. */

    let nta = array[i];
    //if I have to add it
    if (array[i] > array.length || array[i] < -array.length)
      nta = array[i] % array.length;

    i += nta;
    if (i >= array.length) i = Math.abs(array.length - i);
    else if (i < 0) i = array.length + i;

    n++;
  }

  n = 0;
  let c = mainParent;
  while (n < array.length) {
    c = c.next;
    n++;
  }

  return c === mainParent;
}

class Node {
  constructor(val, i) {
    this.val = val;
    this.next = null;
    this.index = i;
  }
}

console.log(hasSingleCycle([2, 3, 1, -4, -4, 2]));
