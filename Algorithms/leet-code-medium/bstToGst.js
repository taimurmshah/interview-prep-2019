//https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/

//in a BST, the left child represents a smaller value, and the right is greater.
//the array is not necessarily sorted, and it wants me to return the BST, modeled
//as an array, but not sorted.

//Thoughts: the children nodes are going to be @ array[2n + 1] &&|| array[2n + 2]
//I can solve this recursively through DFS – if I sum up the whole array's values in a variable,
//then DFS to find the smallest value, I can then add the total sum to that variable, then go to the next variable.
//so, the structure of the recursive call will be: search left all the way, then update currentNode, then search all the way right.
//Then return the array.
//But how do I DFS left and right?
//in a binary tree, the left child is at array[2n+1], the right being array[2n+2]
//what I can do is have a conditional test to see if the node has children. if it does, keep going,
//and if it doesn't or if the child has been dealt with, update the currentnode value, then go right.
//so, gameplan:
//first, create a variable called total sum that sums up the whole array. This will be O(n)
//then, recursively DFS (not sure if iteratively would be better here)
//  - not sure of the Time complexity here, but I guess it'll be O(log n)

let myBstToGst = tree => {
  if (tree.length <= 1) return tree;
  let sum = 0;
  for (let i = 0; i < tree.length; i++) {
    if (tree[i]) sum += tree[i];
  }

  let DFS = (tree, i = 0) => {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (tree[left] || tree[left] === 0) DFS(tree, left);
    sum = sum - tree[i];
    tree[i] += sum;
    if (tree[right] || tree[right] === 0) DFS(tree, right);
    return tree;
  };

  DFS(tree);
  console.log("tree:", tree);
  return tree;
};

//my algo beat 78.39% of heads, here's a way faster one:

let bstToGst = root => {
  let last = 0; //what is this variable
  console.log("root:", root);
  dfs(root); // hoisting

  function dfs(root) {
    if (!root) return;
    let rightNode = root.right;
    let leftNode = root.left;

    dfs(rightNode); //keep going right, bc right is greater, really just need to add all the values to the right.
    root.val += last; //all the way right, will add 0.
    last = root.val; //as it moves up, it picks up the current value, and since each number will represent
    //the sum of all the values to the right, it only needs to reset last, not accumulate. pretty smart.
    dfs(leftNode);
  }

  return root;
};
