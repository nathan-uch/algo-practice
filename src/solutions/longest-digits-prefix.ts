import ProblemInfo from '../components/info-class.js';

export const LongestDigitsPrefix = new ProblemInfo(
  'Longest Digits Prefix', // name
  'Easy', // difficulty
  'Sep 15, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-9/AACpNbZANCkhHWNs3', // link
  'Retrieve longest prefix containing only digits.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  1. declare variable for result
  2. loop over string
  3.      if current number is number add to result
  4.      if not end loop, return result
    `, // pseudoCode
  function solution(s: string | any): string {
    let result = '';
    for (let i = 0; i < s.length; i++) {
      if (!isNaN(s[i]) && s[i] !== ' ') {
        result += s[i];
      } else {
        break;
      }
    }
    return result;
  } // solution
);
