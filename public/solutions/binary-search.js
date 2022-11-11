import ProblemInfo from '../components/info-class.js';
export const BinarySearch = new ProblemInfo('Binary Search', 'Easy', 'Sep 15, 2022', 'Leet Code / Neet Code', 'https://leetcode.com/problems/binary-search/', 'Find target in array of numbers.', true, false, '', '', `
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
    `, function solution(nums, target) {
    let result = -1;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let half = Math.floor((left + right) / 2);
        if (nums[half] === target) {
            return (result = half);
        }
        else {
            if (nums[half] > target) {
                right = half - 1;
            }
            else {
                left = half + 1;
            }
        }
    }
    return result;
});
//# sourceMappingURL=binary-search.js.map