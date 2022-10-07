import ProblemInfo from '../info-template.js';

export const TwoSum = new ProblemInfo;
TwoSum.name = 'Two Sum';
TwoSum.website = 'Leet Code / Neet Code';
TwoSum.link = 'https://leetcode.com/problems/two-sum/';
TwoSum.date = 'Oct 7th, 2022';
TwoSum.difficulty = 'Easy';
TwoSum.recommendedTime = 15;
TwoSum.timeToComplete = 10;
TwoSum.complete = true;
TwoSum.problem = 'Find index of values in array that their sum equals to target.';
TwoSum.topics = 'Arrays and Hashing';
TwoSum.usedHelp = false;
TwoSum.pseudoCode = `
Steps:
create variable for result with positions 0 and 1
while the first value of result is less the length of nums array -1
  check if both integers equal to target, if yes break while loop
  if not, check if the second value reached the end of the nums array,
    if yes, increment first value and reassign second value to first value + 1
  else, increment second value
if loop ends, return result
`;

/* Problem & Example:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]
*/

var twoSum = function(nums, target) {
    let res = [0, 1];
    while (res[0] < nums.length - 1) {
        if ((nums[res[0]] + nums[res[1]]) === target) {
            break
        } else if (res[1] === nums.length -1) {
            res[0]++;
            res[1] = res[0] + 1;
        } else {
            res[1]++;
        }
    }
    return res;
};

// Hashing
var twoSum2 = function(nums, target) {
  let hash = {}
  let res = null;
  for (let i = 0; i < nums.length; i++) {
    let v = target - nums[i];
    if (hash[v] >= 0) {
      res = [hash[v], i];
      break;
    } else {
      hash[nums[i]] = i;
    }
  }
  return res;
}
