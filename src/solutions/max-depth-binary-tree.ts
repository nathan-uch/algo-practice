import ProblemInfo from '../components/info-class.js';
import { TreeNode } from './invert-binary-tree.js';

export const MaxDepthBinaryTree = new ProblemInfo(
  'Maximum Depth of Binary Tree', // name
  'Easy', // difficulty
  'Oct 5th, 2022', // date
  'Leet Code / Neet Code', // source
  'https://leetcode.com/problems/maximum-depth-of-binary-tree/', // link
  'Find maximum depth of binary tree.', // summary
  true, // completed
  true, // usedHelp
  'https://youtu.be/hTM3phVI6YQ', // helpSource
  'Binary Tree, Recursion, Depth First Search', // topics
  `
  create base case if root is null
  if not, recursively call depth first search function
  in dfs:
    traverse left node by calling base function with root's left side
    traverse right node by calling base function with root's right side
    get height by comparing both left/right cases and retrieve largest one
    return the height + 1
  `, // pseudoCode
  function maxDepth<T>(root: TreeNode<T> | null): number {
    function depthFS<T>(rt: TreeNode<T>) {
      const l = maxDepth(rt.left);
      const r = maxDepth(rt.right);
      const h = Math.max(l, r);
      return h + 1;
    }

    if (root === null) return 0;
    return depthFS(root);
  } // solution
);
