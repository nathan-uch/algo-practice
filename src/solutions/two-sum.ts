import ProblemInfo from '../components/info-class.js';

export const TwoSum = new ProblemInfo(
  'Two Sum', // name
  'Easy', // difficulty
  'Oct 7th, 2022', // date
  'Leet Code / Neet Code', // source
  'https://leetcode.com/problems/two-sum/', // link
  'Find index of values in array that their sum equals to target.', // summary
  true, // completed
  false, // usedHelp
  'https://youtu.be/KLlXCFG5TnA', // helpSource
  'Arrays and Hashing', // topics
  `
  Steps:
  create variable for result with positions 0 and 1
  while the first value of result is less the length of nums array -1
    check if both integers equal to target, if yes break while loop
    if not, check if the second value reached the end of the nums array,
      if yes, increment first value and reassign second value to first value + 1
    else, increment second value
  if loop ends, return result
    `, // pseudoCode
  function solution(nums: number[], target: number): number[] {
    let res = [0, 1];
    while (res[0] < nums.length - 1) {
      if (nums[res[0]] + nums[res[1]] === target) {
        break;
      } else if (res[1] === nums.length - 1) {
        res[0]++;
        res[1] = res[0] + 1;
      } else {
        res[1]++;
      }
    }
    return res;
  }, // solution
  function solution2(nums: number[], target: number): number[] | null {
    // hashing
    let hash: any = {};
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
  } // solution2, optional
);
