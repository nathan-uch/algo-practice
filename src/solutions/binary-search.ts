import ProblemInfo from '../components/info-class.js';

export const BinarySearch = new ProblemInfo(
  'Binary Search', // name
  'Easy', // difficulty
  'Sep 15, 2022', // date
  'Leet Code / Neet Code', // source
  'https://leetcode.com/problems/binary-search/', // link
  'Find target in array of numbers.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
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
    `, // pseudoCode
  function solution(nums: number[], target: number): number {
    let result = -1;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let half = Math.floor((left + right) / 2);
      if (nums[half] === target) {
        return (result = half);
      } else {
        if (nums[half] > target) {
          right = half - 1;
        } else {
          left = half + 1;
        }
      }
    }
    return result;
  } // solution
);
