import ProblemInfo from '../components/info-class.js';

export const ValidParenthesis = new ProblemInfo(
  'Valid Parenthesis', // name
  'Easy', // difficulty
  'Sep 14, 2022', // date
  'Leet Code / Neet Code', // source
  'https://leetcode.com/problems/valid-parentheses/submissions/', // link
  'Check for valid parenthesis (opens and closes).', // summary
  true, // completed
  false, // usedHelp
  'https://github.com/neetcode-gh/leetcode/blob/main/javascript/20-Valid-Parentheses.js', // helpSource
  'Stacks', // topics
  `
  1. create an array for stack
  2. create open array each type of paren
  3. create closing array each type of paren
  3. loop over the string
  4.      check if current char is opening
  5.          if yes, add to stack
  6.      check if current char is closing
  7.          if yes, check stack if opening present
  8.              if yes, remove opening from stack
  9.              if not, return false
  10. if loop ends and stack is empty, return true
    `, // pseudoCode
  function solution(s: string): boolean {
    let stack = [];
    for (var i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        stack.push(')');
      } else if (s[i] === '[') {
        stack.push(']');
      } else if (s[i] === '{') {
        stack.push('}');
      } else if (s[i] === ')' && stack[stack.length - 1] === ')') {
        stack.pop();
      } else if (s[i] === ']' && stack[stack.length - 1] === ']') {
        stack.pop();
      } else if (s[i] === '}' && stack[stack.length - 1] === '}') {
        stack.pop();
      } else {
        return false;
      }
    }
    if (stack.length > 0) {
      return false;
    }
    return true;
  }, // solution
  function solution2(s: string): boolean {
    const stack = [];
    const open = ['(', '{', '['];
    const close = [')', '}', ']'];

    for (let i = 0; i < s.length; i++) {
      if (open.includes(s[i])) {
        stack.push(s[i]);
      } else if (close.includes(s[i])) {
        if (stack.length === 0) return false;
        const opposite = open[close.indexOf(s[i])];
        if (stack[stack.length - 1] === opposite) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    if (stack.length > 0) return false;
    return true;
  } // solution2, optional
);
