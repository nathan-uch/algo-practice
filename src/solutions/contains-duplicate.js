import ProblemInfo from '../info-template.js';

export const ContainsDuplicate = new ProblemInfo;
ContainsDuplicate.name = 'Contains Duplicate';
ContainsDuplicate.website = 'LeetCode / NeetCode';
ContainsDuplicate.link = 'https://leetcode.com/problems/contains-duplicate/submissions/';
ContainsDuplicate.date = 'Sep 4, 2022';
ContainsDuplicate.difficulty = 'Easy';
ContainsDuplicate.recommendedTime = 15;
ContainsDuplicate.timeToComplete = 10;
ContainsDuplicate.complete = true;
ContainsDuplicate.problem = 'Check if a array of number contains repeating number(s).';
ContainsDuplicate.topics = 'Arrays and Hashing';
ContainsDuplicate.pseudoCode = `
1. create a repeat array to hold previous numbers
2. loop through array
    3. at each element, check if repeat array includes current value
    4. if not, add current value to array
5. if loop ends, return false
`;

/* Problem & Example:
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example:
nums1 = [1,2,3,1]
result = true

nums2 = [1,2,3,4]
result = false

nums3 = [1,1,1,3,3,4,3,2,4,2]
result = true
*/

// Solution 1: hash set
// time O(n)
function solution1(nums) {
    let prev = [];
    for (let i = 0; i < nums.length; i++) {
        if (prev.includes(nums[i])) return true;
        prev.push(nums[i])
    }
    return false;
}

// Solution 2: sorting
// time O(n log n)
function solution2(nums) {
    let sort = nums.sort();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) return true;
    }
    return false;
}
