import ProblemInfo from '../info_template.js';

export const BinarySearch = new ProblemInfo;
BinarySearch.name = 'Binary Search';
BinarySearch.website = 'Leet Code / Neet Code';
BinarySearch.link = 'https://leetcode.com/problems/binary-search/';
BinarySearch.date = 'Sep 15, 2022';
BinarySearch.difficulty = 'Easy';
BinarySearch.recommendedTime = 15;
BinarySearch.timeToComplete = 25;
BinarySearch.complete = true;
BinarySearch.problem = 'Find target in array of numbers.';
BinarySearch.topics = 'Binary Search';
BinarySearch.pseudoCode = `
1. declare result as -1
2. declare left pointer as 0 (index 0)
3. declare right pointer as end of array
4. while left is greater than or equal to right
5.      get half point adding left and right dividing by two and rounding down
6.      check if the half point is the target
7.          if yes, return half index
8.      if not, check if half is greater than target
9.          if yes, move right pointer to half -1
10.     if half is less than target
11.         move left pointer to half plus 1
12. at end of while loop return result
`;

/* Problem & Example:
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

What is a binary search?
In a sorted array, split in half to get to answer

*/

function solution(nums, target) {
    let result = -1;
    let left = 0;
    let right = nums.length -1;
    
    while(left <= right) {
        let half = Math.floor((left + right)/2);
        if (nums[half] === target) {
            return result = half;
        } else {
            if (nums[half] > target) {
                right = half - 1;                
            } else {
                left = half + 1;
            }
        }
    }
    return result;
}