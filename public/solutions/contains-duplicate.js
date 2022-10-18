import ProblemInfo from '../components/info-class.js';
export const ContainsDuplicate = new ProblemInfo('Contains Duplicate', 'Easy', 'Sep 4, 2022', 'LeetCode / NeetCode', 'https://leetcode.com/problems/contains-duplicate/submissions/', 'Check if an array of number contains repeating number(s).', true, true, 'https://github.com/neetcode-gh/leetcode/blob/main/javascript/217-Contains-Duplicate.js', 'Arrays and Hashing', `
  1. create a repeat array to hold previous numbers
  2. loop through array
    3. at each element, check if repeat array includes current value
    4. if not, add current value to array
  5. if loop ends, return false
    `, function solution(nums) {
    let prev = [];
    for (let i = 0; i < nums.length; i++) {
        if (prev.includes(nums[i]))
            return true;
        prev.push(nums[i]);
    }
    return false;
}, function solution2(nums) {
    let sort = nums.sort();
    for (let i = 0; i < sort.length; i++) {
        if (sort[i] === sort[i + 1])
            return true;
    }
    return false;
});
