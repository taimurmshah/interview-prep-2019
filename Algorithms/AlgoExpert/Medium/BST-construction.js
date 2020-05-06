/* https://www.algoexpert.io/questions/BST%20Construction */

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let current = this;
    let newNode = new BST(value);
    while (current.right || current.left) {
      if (value >= current.value) {
        if (current.right) current = current.right;
        else {
          current.right = newNode;
          break;
        }
      }

      if (value < current.value) {
        if (current.left) current = current.left;
        else {
          current.left = newNode;
          break;
        }
      }
    }
    if (!current.right && value >= current.value) {
      current.right = newNode;
      return this;
    }
    if (!current.left && value < current.value) {
      current.left = newNode;
      return this;
    }
    return this;
  }

  contains(value) {
    let current = this;
    while (current.left || current.right) {
      if (current.value === value) return true;
      if (value > current.value && current.right) current = current.right;
      else current = current.left;
    }
    return current.value === value;
  }

  findParentAndNode(value) {
    // debugger;
    let current = this;
    let res = [];
    //if the root node is the value we're looking for
    if (current.value === value) {
      res[0] = undefined;
      res[1] = current;
      return res;
    }

    while (current.left || current.right) {
      if (current.left && current.left.value === value) {
        res[0] = current;
        res[1] = current.left;
        res[2] = "left";
        return res;
      }

      if (current.right && current.right.value === value) {
        res[0] = current;
        res[1] = current.right;
        res[2] = "right";
        return res;
      }

      if (value < current.value) current = current.left;
      else current = current.right;
    }

    return undefined;
  }

  //this method finds the greater child of smallest value to use it to replace the node that's being deleted.
  littleBigKid() {
    let nodeToBeReplaced = this;
    let small = nodeToBeReplaced.right;
    if (!small.right && !small.left) {
      nodeToBeReplaced.value = small.value;
      nodeToBeReplaced.right = null;
      return this;
    }

    if (small.right && !small.left) {
      nodeToBeReplaced.value = small.value;
      nodeToBeReplaced.right = small.right;
      return this;
    }
    if (small.left) {
      let parent = small;
      let child = parent.left;
      while (child.left) {
        parent = child;
        child = parent.left;
      }
      nodeToBeReplaced.value = child.value;
      if (child.right) {
        parent.left = child.right;
      } else parent.left = null;
      return this;
    }
  }

  remove(value) {
    let res = this.findParentAndNode(value);
    if (res === undefined) return this;
    let parent = res[0];
    let foundNode = res[1];
    let direction = res[2];
    if (parent === undefined) {
      if (!foundNode.left && !foundNode.right) foundNode = null;
      if (!foundNode.left && foundNode.right) {
        foundNode.value = foundNode.right.value;
        foundNode.right = null;
        return this;
      } else if (foundNode.left && !foundNode.right) {
        foundNode.value = foundNode.left.value;
        foundNode.left = null;
        return this;
      }
      if (foundNode.left && foundNode.right) {
        foundNode.littleBigKid();
      }
      return this;
    }
    if (!foundNode.left && !foundNode.right) {
      parent[direction] = null;
      return this;
    }
    if (!foundNode.left && foundNode.right) {
      parent[direction] = foundNode.right;
      return this;
    }
    if (foundNode.left && !foundNode.right) {
      parent[direction] = foundNode.left;
      return this;
    }
    if (foundNode.left && foundNode.right) {
      foundNode.littleBigKid();
    }
    return this;
  }
}

// let root = new BST(10);
//
// root.insert(15);
// root.insert(5);
//
// console.log("here's the root:", root);
