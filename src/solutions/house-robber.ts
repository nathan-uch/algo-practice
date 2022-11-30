import ProblemInfo from '../components/info-class.js';

export const HouseRobber = new ProblemInfo(
  'House Robber', // name
  'Easy', // difficulty
  'Nov 29th, 2022', // date
  'Leet Code / Neet Code', // source
  'https://leetcode.com/problems/house-robber/submissions/852102333/', // link
  'Find the maximum amount of array, but cannot pick two consecutive numbers.', // summary
  true, // completed
  true, // usedHelp
  'https://youtu.be/73r3KWiEvyk', // helpSource
  '1-D Dynamic Programming ', // topics
  `
  Between the houses, we want to find the maxmimum amount from two previous choices and the current house.
  For example: [house1, house2, n, n + 1, ...]
  What was the maximum amount between house1 and house2?
  If we pick 'n', we can add house1 to it.
  If we don't pick n, we only select house2.
  Therefore, what is the highest amount between 'house1 + n' and 'house2'
  Then we increment house1 to next amount (to house2), and house2 will be the new maximum found.
  In the end return house2 (when reaching the last number in the array)

  `, // pseudoCode
  function solution(nums: number[]): number {
    let house1 = 0;
    let house2 = 0;
    for (let i = 0; i < nums.length; i++) {
      let temp = Math.max(nums[i] + house1, house2);
      house2 = temp;
      house1 = house2;
    }
    return house2;
  } // solution
);
