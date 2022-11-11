import ProblemInfo from '../components/info-class.js';
export const MaxDepthBinaryTree = new ProblemInfo('Maximum Depth of Binary Tree', 'Easy', 'Oct 5th, 2022', 'Leet Code / Neet Code', 'https://leetcode.com/problems/maximum-depth-of-binary-tree/', 'Find maximum depth of binary tree.', true, true, 'https://youtu.be/hTM3phVI6YQ', 'Binary Tree, Recursion, Depth First Search', `
  create base case if root is null
  if not, recursively call depth first search function
  in dfs:
    traverse left node by calling base function with root's left side
    traverse right node by calling base function with root's right side
    get height by comparing both left/right cases and retrieve largest one
    return the height + 1
  `, function maxDepth(root) {
    function depthFS(rt) {
        const l = maxDepth(rt.left);
        const r = maxDepth(rt.right);
        const h = Math.max(l, r);
        return h + 1;
    }
    if (root === null)
        return 0;
    return depthFS(root);
});
//# sourceMappingURL=max-depth-binary-tree.js.map