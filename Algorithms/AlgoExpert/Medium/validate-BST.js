class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//essentially a DFS problem, if I encounter a node whose
//child doesn't follow the rule, return false
//if i make it to the end, return true

/* Two rules of recursion:
    1. What is the base case? (What will I return at the base case?)
        - The base case is a leaf node.
        - I think I'll be returning a boolean.
    2. What am I changing?
        - The input; I'll have to input the left and right children of the current node.

  Strategy:
  I will check the current node, and I'll see if it has left and right children. If it does,
  I'll check if the children follow the BST rule. If they do, I'll call recursively. If they
  don't, I'll return false, which should break the rule.

  so, this is a valid bst if each node follows the rules of the immediate parent AND the global
  parent. easy enough to check. I want to return a false for EVERYTHING if there's one failure
  anywhere. I think this'll have to be done by the false, if there is one, bubbling up. so, a base-case
  is either I make it to a leaf node (true) or if I see a case where it's false. What I'm looking to do
  is to stop everything if there's a single false. How do I do that?

*/

const validateBSTHelper = (node, min, max) => {
  if (node === null) return true;
  const isLeftValid = validateBSTHelper(node.left, min, node.value);
  const isRightValid = validateBSTHelper(node.right, node.value, max);
  return isLeftValid && isRightValid;
};

const validateBST = root => {
  return validateBSTHelper(root, -Infinity, Infinity);
};

let root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.left.right.right = new BST(11);
root.right = new BST(15);
root.right.right = new BST(22);

// console.log({ root });
