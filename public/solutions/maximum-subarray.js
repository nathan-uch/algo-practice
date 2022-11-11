import ProblemInfo from '../components/info-class.js';
export const MaximumSubarray = new ProblemInfo('Maximum Subarray', 'Medium', 'Sep 27, 2022', 'Leet Code / Neet Code', 'https://leetcode.com/problems/maximum-subarray/', 'Find contiguous subarray with largest sum.', true, true, 'https://youtu.be/5WZl3MMT0Eg', 'Sliding Window', `
  Steps needed:
  - Find current prefix and check if negative or positive
  - Move end to next value and check if total is positive
    `, function solution(nums) {
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
});
//# sourceMappingURL=maximum-subarray.js.map