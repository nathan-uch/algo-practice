import ProblemInfo from '../components/info-class.js';

export const DeleteDigit = new ProblemInfo(
  'Delete Digit', // name
  'Medium', // difficulty
  'Oct 25th, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-11/vpfeqDwGZSzYNm2uX', // link
  'Find the maximal number you can obtain by deleting exactly one digit of a given number.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  string -> seperate digits
  variable for largest start at 0
  loop through string,
  remove string[i]
  concatenate remaining
  convert to number
  compare with largest
    `, // pseudoCode
  function solution(n: number): number {
    const string = n.toString();
    let largest = 0;
    for (let i = 0; i < string.length; i++) {
      let remaining = '';
      for (let j = 0; j < string.length; j++) {
        if (j !== i) {
          remaining += string[j];
        }
      }
      let current = Number(remaining);
      if (current > largest) largest = current;
    }
    return largest;
  } // solution
);
