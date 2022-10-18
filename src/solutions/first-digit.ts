import ProblemInfo from '../components/info-class.js';

export const FirstDigit = new ProblemInfo(
  'First Digit', // name
  'Easy', // difficulty
  'Sep 10, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-8/rRGGbTtwZe2mA8Wov', // link
  'First leftmost digit from a string', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  1. Loop through string
  2. check if is a digit
  3. return digit
    `, // pseudoCode
  function solution(s: string): string {
    let result = '';
    for (let i = 0; i < s.length; i++) {
      if (s[i] === ' ') {
        continue;
      } else if (!isNaN(Number(s[i]))) {
        result = s[i];
        break;
      }
    }
    return result.toString();
  } // solution
);
