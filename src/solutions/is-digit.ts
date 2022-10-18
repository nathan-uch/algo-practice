import ProblemInfo from '../components/info-class.js';

export const IsDigit = new ProblemInfo(
  'Is Digit', // name
  'Easy', // difficulty
  'Oct 8th, 2022', // date
  'Code Signal', // source
  'https://leetcode.com/problems/two-sum/', // link
  'Check if digit', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
    `, // pseudoCode
  function solution(symbol: any): boolean {
    if (isNaN(symbol)) return false;
    return true;
  } // solution
);
