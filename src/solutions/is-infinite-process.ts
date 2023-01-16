import ProblemInfo from '../components/info-class.js';

export const IsInfiniteProcess = new ProblemInfo(
  'Is Infinite Process?', // name
  'Easy', // difficulty
  'Jan 16th, 2023', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/aFF9HDm2Rsti9j5kc', // link
  'Check if process is infinite from two values, one incrementing and other decrementing until equal.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  'Infinite Loop', // topics
  `

  `, // pseudoCode
  function solution(a: number, b: number): boolean {
    if (b - a === 1 || a > b) {
      return true;
    } else {
      while (a <= b) {
        if (a === b) return false;
        a++;
        b--;
      }
      return true;
    }
  } // solution
);
