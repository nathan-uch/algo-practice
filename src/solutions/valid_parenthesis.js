import ProblemInfo from '../info_template.js';

export const ValidParenthesis = new ProblemInfo;
ValidParenthesis.name = 'Valid Parenthesis';
ValidParenthesis.website = 'Leet Code / Neet Code';
ValidParenthesis.link = 'https://leetcode.com/problems/valid-parentheses/submissions/';
ValidParenthesis.date = 'Sep 14, 2022';
ValidParenthesis.difficulty = 'Easy';
ValidParenthesis.recommendedTime = 15;
ValidParenthesis.timeToComplete = 15;
ValidParenthesis.complete = true;
ValidParenthesis.problem = 'Check for valid parenthesis (opens and closes).';
ValidParenthesis.topics = '!Stacks';
ValidParenthesis.pseudoCode = `
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

`;

/* Problem & Example:
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
*/

function solution(s) {
    const stack = [];
    const open = ['(', '{', '['];
    const close = [')', '}', ']'];

    for (let i = 0; i < s.length; i++) {
        if (open.includes(s[i])) {
            stack.push(s[i])
        } else if (close.includes(s[i])) {
            if (stack.length === 0) return false;
            const opposite = open[close.indexOf(s[i])]
            if (stack[stack.length -1] === opposite) {
                stack.pop()
            } else {
                return false;
            }
        }
    }
    if (stack.length > 0) return false;
    if (stack.length === 0) return true;
}

/*
array.at(-1) = array[array.length -1]

Previous Answer:
var isValid = function(s) {
    let stack = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(')');
        } else if (s[i] === '[') {
            stack.push(']');
        } else if (s[i] === '{') {
            stack.push('}');
        } else if (s[i] === ')' && stack[stack.length -1] === ')') {
            stack.pop();
        } else if (s[i] === ']' && stack[stack.length -1] === ']') {
            stack.pop();
        } else if (s[i] === '}' && stack[stack.length -1] === '}') {
            stack.pop();
        } else {
            return false;
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
}
*/
