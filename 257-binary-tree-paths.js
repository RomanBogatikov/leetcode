// 257. Binary Tree Paths

// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

 

// Example 1:


// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]
// Example 2:

// Input: root = [1]
// Output: ["1"]
 

// Constraints:

// The number of nodes in the tree is in the range [1, 100].
// -100 <= Node.val <= 100

var binaryTreePaths = function(root) {
  const traverse = (node) => {
      if (node.left) {
          path.push(node.left.val);
          traverse(node.left);
      }
      if (node.right) {
          path.push(node.right.val);
          traverse(node.right);
      }
      
      if (!node.left && !node.right) {
          allPaths.push(path.join('->'));
      }
      path.pop();
  }
  
  let path = [root.val];
  let allPaths = [];
  traverse(root);
  return allPaths;
};