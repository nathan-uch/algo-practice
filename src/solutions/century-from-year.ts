import ProblemInfo from '../components/info-class.js';

export const CenturyFromYear = new ProblemInfo(
  'Century from Year', // name
  'Easy', // difficulty
  'Aug 30, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-1/egbueTZRRL5Mm4TXN/solutions', // link
  'Convert year to century', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
    1. divide year by 100 and round down to get century
    2. check if year divided by 100 is less than century
        3. if yes, return the century
        4. if not, return century + 1
  `, // pseudoCode
  function solution(year: number): number {
    let century = Math.floor(year / 100);
    if (year / 100 <= century) {
      return Math.floor(century);
    } else {
      return Math.floor(century) + 1;
    }
  } // solution
);
