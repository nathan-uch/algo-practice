import ProblemInfo from '../components/info-class.js';

export const SeatsInTheater = new ProblemInfo(
  'Seats in Theater', // name
  'Easy', // difficulty
  'Nov 15th, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/code-arcade/intro-gates/bszFiQAog96G9CXKg', // link
  '', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  get rows by subtracting from total
  get cols by subtracting from total
  `, // pseudoCode
  function solution(
    nCols: number,
    nRows: number,
    col: number,
    row: number
  ): number {
    const rows = nRows - row;
    const cols = nCols - col + 1;
    return rows * cols;
  } // solution
);
