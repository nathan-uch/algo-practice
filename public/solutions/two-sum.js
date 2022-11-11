import ProblemInfo from '../components/info-class.js';
export const TwoSum = new ProblemInfo('Two Sum', 'Easy', 'Oct 7th, 2022', 'Leet Code / Neet Code', 'https://leetcode.com/problems/two-sum/', 'Find index of values in array that their sum equals to target.', true, false, 'https://youtu.be/KLlXCFG5TnA', 'Arrays and Hashing', `
  Steps:
  create variable for result with positions 0 and 1
  while the first value of result is less the length of nums array -1
    check if both integers equal to target, if yes break while loop
    if not, check if the second value reached the end of the nums array,
      if yes, increment first value and reassign second value to first value + 1
    else, increment second value
  if loop ends, return result
    `, function solution(nums, target) {
    let res = [0, 1];
    while (res[0] < nums.length - 1) {
        if (nums[res[0]] + nums[res[1]] === target) {
            break;
        }
        else if (res[1] === nums.length - 1) {
            res[0]++;
            res[1] = res[0] + 1;
        }
        else {
            res[1]++;
        }
    }
    return res;
}, function solution2(nums, target) {
    let hash = {};
    let res = null;
    for (let i = 0; i < nums.length; i++) {
        let v = target - nums[i];
        if (hash[v] >= 0) {
            res = [hash[v], i];
            break;
        }
        else {
            hash[nums[i]] = i;
        }
    }
    return res;
});
//# sourceMappingURL=two-sum.js.map