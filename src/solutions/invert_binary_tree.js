import ProblemInfo from '../info_template.js';

export const InvertBinaryTree = new ProblemInfo;
InvertBinaryTree.name = 'Reverse Linked List';
InvertBinaryTree.website = 'Leet Code / Neet Code';
InvertBinaryTree.link = 'https://leetcode.com/problems/invert-binary-tree/';
InvertBinaryTree.date = 'Sep 21, 2022';
InvertBinaryTree.difficulty = 'Easy';
InvertBinaryTree.recommendedTime = 20;
InvertBinaryTree.timeToComplete = 15;
InvertBinaryTree.complete = true;
InvertBinaryTree.problem = 'Invert a binary tree.';
InvertBinaryTree.topics = 'Trees, Recusion & Depth first search';
InvertBinaryTree.usedHelp = true;
InvertBinaryTree.pseudoCode = `
Steps breakdown:
- swap the left and right
- keep doing until current node is null

1. base case if root is null
2. if not,
3.    save left node temporary variable
4.    make the left of root the right of root
5.    make the right of root the temporary left variable\
6.    call the function again on both right and left side of the root
7. when loop is done, return root

`;

/* Problem & Example:
Given the root of a binary tree, invert the tree, and return its root.

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
*/

function solution(root) {
  if (root === null) {
    return null
  } else {
    let leftNode = root.left;
    root.left = root.right;
    root.right = leftNode;
    solution(root.left);
    solution(root.right);
  }
  return root;
}
