/*~~~~~~~~~~~~~~~~~~~~~~~~~~~Binary Search Trees~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  printValues(node = this.root) {
    if (!this.root) return null;
    else if (!!node.right && !!node.left) {
      this.printValues(node.right);
      this.printValues(node.left);
      console.log(node.value);
    } else if (!!node.right && !node.left) {
      this.printValues(node.right);
      console.log(node.value);
    } else if (!node.right && !!node.left) {
      this.printValues(node.left);
      console.log(node.value);
    } else {
      console.log(node.value);
      return node;
    }
    return this;
  }

  //iterative solution
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) return undefined;
      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
    return this;
  }

  //recursively
  rinsert(value) {
    let newNode = new Node(value);
    let helper = (node, currentNode) => {
      if (node.value === currentNode.value) {
        return undefined;
      }
      if (node.value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = node;
          return this;
        } else {
          return helper(node, currentNode.right);
        }
      } else if (node.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        } else {
          return helper(node, currentNode.left);
        }
      }
    };
    if (!this.root) {
      this.root = newNode;
    } else {
      return helper(newNode, this.root);
    }
  }

  //iterative find
  find(value) {
    if (!this.root || !value) return undefined;
    let currentNode = this.root;
    while (true) {
      if (value > currentNode.value) {
        if (!currentNode.right) {
          return false;
        } else if (currentNode.right.value === value) {
          return true;
        } else {
          currentNode = currentNode.right;
        }
      } else if (value < currentNode.value) {
        if (!currentNode.left) {
          return false;
        } else if (currentNode.left.value === value) {
          return true;
        } else {
          currentNode = currentNode.left;
        }
      } else if (value === currentNode.value) {
        return true;
      }
    }
  }

  //recursive find
  rfind(value) {
    if (!this.root || !value) return undefined;
    let helper = (value, currentNode = this.root) => {
      if (value > currentNode.value) {
        if (!currentNode.right) return false;
        else {
          return helper(value, currentNode.right);
        }
      } else if (value < currentNode.value) {
        if (!currentNode.left) return false;
        else {
          return helper(value, currentNode.left);
        }
      } else return true;
    };
    return helper(value);
  }

  //iterative
  bfs() {
    let queue = [this.root];
    let visited = [];
    let i = 0;
    while (queue.length > 0) {
      visited.push(queue.shift());
      if (!!visited[i].right && !!visited[i].left) {
        queue.push(visited[i].left);
        queue.push(visited[i].right);
      } else if (!!visited[i].left && !visited[i].right) {
        queue.push(visited[i].left);
      } else if (!visited[i].left && !!visited[i].right) {
        queue.push(visited[i].right);
      }
      i++;
    }
    visited = visited.map(node => {
      return node.value;
    });
    return visited;
  }

  //DFS
  DFSPreOrder() {
    if (!this.root) return null;
    let store = [];

    let helper = (currentNode = this.root) => {
      store.push(currentNode.value);
      if (currentNode.left) helper(currentNode.left);
      if (currentNode.right) helper(currentNode.right);
    };
    helper();
    return store;
  }

  DFSPostOrder() {
    if (!this.root) return null;
    let store = [];

    let helper = (currentNode = this.root) => {
      if (currentNode.left) helper(currentNode.left);
      if (currentNode.right) helper(currentNode.right);
      store.push(currentNode.value);
    };
    helper();
    return store;
  }

  DFSInOrder() {
    if (!this.root) return null;
    let store = [];

    let helper = (currentNode = this.root) => {
      if (currentNode.left) helper(currentNode.left);
      store.push(currentNode.value);
      if (currentNode.right) helper(currentNode.right);
    };

    helper();
    return store;
  }
}

let basic = new BinarySearchTree();
basic.root = new Node(10);
basic.insert(1);
basic.insert(2);
basic.insert(21);
basic.insert(32);
basic.insert(100);
basic.insert(14);
basic.insert(3);

let notSorted = new BinarySearchTree();

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~Tree Traversal~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

//BFS = breadth-first search
//DFS = depth-first search
//this section is about tree traversal, but NOT for BSTs
//which are already sorted; tree traversal here refers to
//trees (not sure if it's only binary; i dont think so)
