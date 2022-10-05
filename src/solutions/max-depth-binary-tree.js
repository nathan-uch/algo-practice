import ProblemInfo from '../info-template.js';

export const MaxDepthBinaryTree = new ProblemInfo;
MaxDepthBinaryTree.name = 'Maximum Depth of Binary Tree';
MaxDepthBinaryTree.website = 'Leet Code / Neet Code';
MaxDepthBinaryTree.link = 'https://leetcode.com/problems/maximum-depth-of-binary-tree/';
MaxDepthBinaryTree.date = 'Oct 5th, 2022';
MaxDepthBinaryTree.difficulty = 'Easy';
MaxDepthBinaryTree.recommendedTime = 15;
MaxDepthBinaryTree.timeToComplete = 30;
MaxDepthBinaryTree.complete = true;
MaxDepthBinaryTree.problem = 'Find maximum depth of binary tree.';
MaxDepthBinaryTree.topics = 'Binary Tree, Recursion, Depth First Search';
MaxDepthBinaryTree.usedHelp = true;
MaxDepthBinaryTree.pseudoCode = `
Steps:
  create base case if root is null
  if not, recursively call depth first search function
  in dfs:
    traverse left node by calling base function with root's left side
    traverse right node by calling base function with root's right side
    get height by comparing both left/right cases and retrieve largest one
    return the height + 1
`;

/* Problem & Example:
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Input: root = [3,9,20,null,null,15,7]
Output: 3

Input: root = [1,null,2]
Output: 2
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return 0;
    return depthFS(root);
};

const depthFS = (root) => {
    const l = maxDepth(root.left);
    const r = maxDepth(root.right);
    const h = Math.max(l, r);
    return h + 1;
}
