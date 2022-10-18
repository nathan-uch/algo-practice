import ProblemInfo from '../components/info-class.js';

export const MaximumSubarray = new ProblemInfo(
  'Maximum Subarray', // name
  'Medium', // difficulty
  'Sep 27, 2022', // date
  'Leet Code / Neet Code', // source
  'https://leetcode.com/problems/maximum-subarray/', // link
  'Find contiguous subarray with largest sum.', // summary
  true, // completed
  true, // usedHelp
  'https://youtu.be/5WZl3MMT0Eg', // helpSource
  'Sliding Window', // topics
  `
  Steps needed:
  - Find current prefix and check if negative or positive
  - Move end to next value and check if total is positive
    `, // pseudoCode
  function solution(nums: number[]): number {
    let result = nums[0];
    let cur = 0;
    for (let i = 0; i < nums.length; i++) {
      if (cur < 0) {
        cur = 0;
      }
      cur += nums[i];
      result = Math.max(result, cur);
    }
    return result;
  } // solution
);
