import ProblemInfo from '../info-template.js';

export const MaximumSubarray = new ProblemInfo;
MaximumSubarray.name = 'Maximum Subarray';
MaximumSubarray.website = 'Leet Code / Neet Code';
MaximumSubarray.link = 'https://leetcode.com/problems/maximum-subarray/';
MaximumSubarray.date = 'Sep 27, 2022';
MaximumSubarray.difficulty = 'Medium';
MaximumSubarray.recommendedTime = 20;
MaximumSubarray.timeToComplete = 0;
MaximumSubarray.complete = true;
MaximumSubarray.problem = 'Find contiguous subarray with largest sum.';
MaximumSubarray.topics = 'Sliding Window';
MaximumSubarray.usedHelp = true;
MaximumSubarray.pseudoCode = `
Steps needed:
- Find current prefix and check if negative or positive
- Move end to next value and check if total is positive

`;

/* Problem & Example:
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
A subarray is a contiguous part of an array.

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Input: nums = [1]
Output: 1

Input: nums = [5,4,-1,7,8]
Output: 23

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

*/

var maxSubArray = function(nums) {
  let result = nums[0];
  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    if (cur < 0) {
      cur = 0;
    }
    cur += nums[i]
    result = Math.max(result, cur)
  }
  return result;
};
