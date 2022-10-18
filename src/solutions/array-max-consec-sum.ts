import ProblemInfo from '../components/info-class.js';

export const ArrayMaxConsecutiveSum = new ProblemInfo(
  'Array Max Consecutive Sum', // name
  'Easy', // difficulty
  'Sep 12, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-8/Rqvw3daffNE7sT7d5', // link
  'Find the max possible sum of some of its k consecutive elements from array of int.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  1. create result variable
  2. loop over array
  3.      get the last index (last index of value to add to sum)
  4.      check if the value at the last index is undefined
  5.          if yes, end loop
  6.      if not, declare sum at 0
  7.      loop through array but only through values to be added to sum, according to k
  8.          at each value, add to sum
  9.      at end of sum loop, check if the highest value is less than sum
  10.         if yes, replace the highest value with sum
  11. at end of loop, return highest value
    `, // pseudoCode
  function solution(arr: number[], k: number): number {
    let highest = 0;
    for (let i = 0; i < arr.length; i++) {
      const lastIndex = i + k - 1;
      if (arr[lastIndex] === undefined) break;
      let sum = 0;
      for (let num = i; num <= lastIndex; num++) {
        sum += arr[num];
      }
      if (highest < sum) highest = sum;
    }
    return highest;
  } // solution
);
