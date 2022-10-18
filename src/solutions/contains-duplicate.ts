import ProblemInfo from '../components/info-class.js';

export const ContainsDuplicate = new ProblemInfo(
  'Contains Duplicate', // name
  'Easy', // difficulty
  'Sep 4, 2022', // date
  'LeetCode / NeetCode', // source
  'https://leetcode.com/problems/contains-duplicate/submissions/', // link
  'Check if an array of number contains repeating number(s).', // summary
  true, // completed
  true, // usedHelp
  'https://github.com/neetcode-gh/leetcode/blob/main/javascript/217-Contains-Duplicate.js', // helpSource
  'Arrays and Hashing', // topics
  `
  1. create a repeat array to hold previous numbers
  2. loop through array
    3. at each element, check if repeat array includes current value
    4. if not, add current value to array
  5. if loop ends, return false
    `, // pseudoCode
  function solution(nums: number[]): boolean {
    let prev: number[] = [];
    for (let i = 0; i < nums.length; i++) {
      if (prev.includes(nums[i])) return true;
      prev.push(nums[i]);
    }
    return false;
  }, // solution - hash set, time O(n)
  function solution2(nums: number[]): boolean {
    let sort = nums.sort();
    for (let i = 0; i < sort.length; i++) {
      if (sort[i] === sort[i + 1]) return true;
    }
    return false;
  } // solution2 - sorting, time O(n log n)
);
