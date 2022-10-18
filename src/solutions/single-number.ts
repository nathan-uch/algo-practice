import ProblemInfo from '../components/info-class.js';

export const SingleNumber = new ProblemInfo(
  'Single Number', // name
  'Easy', // difficulty
  'Oct 1st, 2022', // date
  'Leet Code / Neet Code', // source
  'https://leetcode.com/problems/single-number/', // link
  'Find the number that does not repeat in array.', // summary
  true, // completed
  true, // usedHelp
  'https://youtu.be/qMPX1AOa83k', // helpSource
  'Bit Manipulation, XOR', // topics
  `
  Steps needed:
  Hashmap or bit XOR

  What is XOR?
  Taking numbers and converting them to bit
  Example:
  [4,  -> 100
  1,   -> 001
  2,   -> 010
  1,   -> 001
  2]   -> 010

  If 001 + 001, result is 000. In other words, for bits, adding two 1s gives a 0 and adding two 0s gives also a 0.
  From example, '2' 010 + 010 = 000 and '1' 001 + 001 = 000.
  Simply checking what is left from the bits
    `, // pseudoCode
  function solution(nums: number[]): number {
    let copies: any = {};
    for (let i = 0; i < nums.length; i++) {
      if (!copies[nums[i]]) {
        copies[nums[i]] = 1;
      } else {
        delete copies[nums[i]];
      }
    }
    let res = Object.keys(copies);
    return Number(res[0]);
  } // solution
  /* function solution2(nums: number[], xor = 0): number {
    for (num of nums) {
      xor ^= num;
    }
    return xor;
  } */
);
