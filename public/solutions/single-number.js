import ProblemInfo from '../components/info-class.js';
export const SingleNumber = new ProblemInfo('Single Number', 'Easy', 'Oct 1st, 2022', 'Leet Code / Neet Code', 'https://leetcode.com/problems/single-number/', 'Find the number that does not repeat in array.', true, true, 'https://youtu.be/qMPX1AOa83k', 'Bit Manipulation, XOR', `
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
    `, function solution(nums) {
    let copies = {};
    for (let i = 0; i < nums.length; i++) {
        if (!copies[nums[i]]) {
            copies[nums[i]] = 1;
        }
        else {
            delete copies[nums[i]];
        }
    }
    let res = Object.keys(copies);
    return Number(res[0]);
});
