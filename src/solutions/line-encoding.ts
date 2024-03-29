import ProblemInfo from '../components/info-class.js';

export const LineEncoding = new ProblemInfo(
  'Line Encoding', // name
  'Medium', // difficulty
  'Oct 8th, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-11/o2uq6eTuvk7atGadR', // link
  'Return a string encoded by replacing repeating letters with numbers.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  1. create variable to hold current letter
  2. create count variable
  3. create final string variable
  4. loop through string
  5. check if current letter is equal to variable
  6. if yes, increase count
  7. if not,
  8.    check if count is one, add current to string
  9.    if count is greater than one, add count and current to result string
  8. reset count and replace current string
    `, // pseudoCode
  function solution(s: string): string {
    let cur = null;
    let count = 0;
    let res = '';
    for (let i = 0; i <= s.length; i++) {
      if (cur === null) {
        cur = s[i];
        count++;
      } else if (s[i] === cur) {
        count++;
      } else if (s[i] !== cur) {
        if (Number(count) === 1) {
          res += cur;
        } else {
          res += count + cur;
        }
        count = 1;
        cur = s[i];
      }
    }
    return res;
  } // solution
);
