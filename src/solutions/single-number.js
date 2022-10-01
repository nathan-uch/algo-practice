import ProblemInfo from '../info-template.js';

export const SingleNumber = new ProblemInfo;
SingleNumber.name = 'Single Number';
SingleNumber.website = 'Leet Code / Neet Code';
SingleNumber.link = 'https://leetcode.com/problems/single-number/';
SingleNumber.date = 'Oct 1st, 2022';
SingleNumber.difficulty = 'Easy';
SingleNumber.recommendedTime = 15;
SingleNumber.timeToComplete = 10;
SingleNumber.complete = true;
SingleNumber.problem = 'Find the number that does not repeat in array.';
SingleNumber.topics = 'Bit Manipulation, XOR';
SingleNumber.usedHelp = false;
SingleNumber.pseudoCode = `
Steps needed:
Hashmap or bit XOR

What is XOR?
Taking numbers and converting them to bit
Example:
[4,  -> 100
1,   -> 001
2,   -> 010
1,   -> 001
2]   -> 010

If 001 + 001, result is 000. In other words, for bits, adding two 1s gives a 0 and adding two 0s gives also a 0.
From example, '2' 010 + 010 = 000 and '1' 001 + 001 = 000.
Simply checking what is left from the bits
`;

/* Problem & Example:
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Input: nums = [2,2,1]
Output: 1

Input: nums = [4,1,2,1,2]
Output: 4

Input: nums = [1]
Output: 1
*/

var singleNumber = function(nums) {
  let copies = {};
  for (let i = 0; i < nums.length; i++) {
    if (!copies[nums[i]]) {
      copies[nums[i]] = 1;
    } else {
      delete copies[nums[i]];
    }
  }
  let res = Object.keys(copies);
  return res[0];
};

//XOR solution
var singleNumber = function (nums, xor = 0) {
    for (num of nums) {
        xor ^= num;
    }
    return xor;
};
