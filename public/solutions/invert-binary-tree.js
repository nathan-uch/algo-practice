import ProblemInfo from '../components/info-class.js';
export class TreeNode {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val;
    }
}
export const InvertBinaryTree = new ProblemInfo('Invert Binary Tree', 'Easy', 'Sep 21, 2022', 'Leet Code / Neet Code', 'https://leetcode.com/problems/invert-binary-tree/', 'Invert a binary tree.', true, true, 'https://www.youtube.com/watch?v=OnSn2XEQ4MY', 'Trees, Recursion & Breadth first search', `
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
    `, function solution(root) {
    if (root === null) {
        return null;
    }
    else {
        let leftNode = root.left;
        root.left = root.right;
        root.right = leftNode;
        solution(root.left);
        solution(root.right);
    }
    return root;
});
