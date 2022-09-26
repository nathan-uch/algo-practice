import ProblemInfo from '../info-template.js';

export const ClimbingStairs = new ProblemInfo;
ClimbingStairs.name = 'Climbing Stairs';
ClimbingStairs.website = 'Leet Code / Neet Code';
ClimbingStairs.link = 'https://leetcode.com/problems/climbing-stairs/';
ClimbingStairs.date = 'Sep 26, 2022';
ClimbingStairs.difficulty = 'Easy';
ClimbingStairs.recommendedTime = 20;
ClimbingStairs.timeToComplete = 15;
ClimbingStairs.complete = true;
ClimbingStairs.problem = 'You can take 1 or 2 steps to climb a stairs, find max distinct ways to reach top.';
ClimbingStairs.topics = 'Bottom-up programming approach, Cache, Memoization, Fibonacci';
ClimbingStairs.usedHelp = true;
ClimbingStairs.pseudoCode = `
Steps needed:
- At every step, try 1 step or 2 steps
- Check if current step is over n (past steps) doesn't count
- Check if current step is equal to n (exact end) adds to result
- Check if current step is less than n (didn't reach end) go back to trying 1 or 2


Bottom-up:
Start at the base case, ask how many sequences lead to n
Example: if n = 5, we are at n. How many steps gives us 5, 1
Save the positions of one step and two steps.
From example: stairs:
0, 1, 2, 3, 4, 5
          [1, 1]
      [2, 1]   // to get 3's possible solutions, add previous array
    [3, 2]
  [5, 3]
[8, 5] // answer = 8

1. save possible solutions for last two numbers starting at n
2. save current steps starting at n-1
3. create variable for the next step (current -1)
-  check for n = 1
4. while current is greater than 0
5.   get the next by adding current possible solutions (arr[0] + arr[1])
6.   decrement current (move to next number)
7.   get possible solutions for next step array
8 when reaching 0, return next
`;

/* Problem & Example:
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

var climbStairs = function(n) {
  let steps = [1, 1];
  let cur = n - 1;
  let next = null;
  if (cur === 0) return 1
  while (cur > 0) {
    next = steps[0] + steps[1];
    cur--;
    steps = [next, steps[0]]
  }
  return next;
};
