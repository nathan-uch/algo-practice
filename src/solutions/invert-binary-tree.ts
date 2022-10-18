import ProblemInfo from '../components/info-class.js';

export class TreeNode<T> {
  val: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(val: T) {
    this.val = val;
  }
}

export const InvertBinaryTree = new ProblemInfo(
  'Invert Binary Tree', // name
  'Easy', // difficulty
  'Sep 21, 2022', // date
  'Leet Code / Neet Code', // source
  'https://leetcode.com/problems/invert-binary-tree/', // link
  'Invert a binary tree.', // summary
  true, // completed
  true, // usedHelp
  'https://www.youtube.com/watch?v=OnSn2XEQ4MY', // helpSource
  'Trees, Recursion & Breadth first search', // topics
  `
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
    `, // pseudoCode
  function solution<T>(root: TreeNode<T> | null): TreeNode<T> | null {
    if (root === null) {
      return null;
    } else {
      let leftNode = root.left;
      root.left = root.right;
      root.right = leftNode;
      solution(root.left);
      solution(root.right);
    }
    return root;
  } // solution
);
