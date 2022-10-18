import ProblemInfo from '../components/info-class.js';
export const ClimbingStairs = new ProblemInfo('Climbing Stairs', 'Easy', 'Sep 26, 2022', 'Leet Code / Neet Code', 'https://leetcode.com/problems/climbing-stairs/', 'You can take 1 or 2 steps to climb a stairs, find max distinct ways to reach top.', true, true, 'https://www.youtube.com/watch?v=Y0lT9Fck7qI&feature=emb_title', 'Bottom-up programming approach, Cache, Memoization, Fibonacci', `
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
  `, function solution(n) {
    let steps = [1, 1];
    let cur = n - 1;
    let next = 0;
    if (cur === 0)
        return 1;
    while (cur > 0) {
        next = steps[0] + steps[1];
        cur--;
        steps = [next, steps[0]];
    }
    return next;
});
