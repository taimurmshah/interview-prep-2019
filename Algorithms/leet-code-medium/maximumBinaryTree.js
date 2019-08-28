//https://leetcode.com/problems/maximum-binary-tree/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

//Test input array: [3, 2, 1, 6, 0, 5];

let constructMaximumBinaryTree = nums => {
  if (nums.length === 1) return new TreeNode(nums[0]);

  let node = nums[0];
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > node) {
      node = nums[i];
      index = i;
    }
  }
  node = new TreeNode(node);

  if (index === 0) {
    node.right = constructMaximumBinaryTree(nums.slice(index + 1));
  } else if (index === nums.length - 1) {
    node.left = constructMaximumBinaryTree(nums.slice(0, index));
  } else {
    node.left = constructMaximumBinaryTree(nums.slice(0, index));
    node.right = constructMaximumBinaryTree(nums.slice(index + 1));
  }

  return node;
};
