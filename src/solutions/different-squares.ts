import ProblemInfo from '../components/info-class.js';

export const DifferentSquares = new ProblemInfo(
  'Different Squares', // name
  'Medium', // difficulty
  'Oct 31th, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-12/fQpfgxiY6aGiGHLtv', // link
  'Given integer matrix, find number of DIFFERENT 2x2 squares within it.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  create variable to hold final count
  create array to hold existing 2x2s
  loop through array rows
    loop through array codesignal
      at each point, check if
        1. right int is null
        2. bottom int is null
        3. bottom right int is null
      if not, concatenate the numbers as strings in order adding to existing 2x2s array
      increment count
  return count
    `, // pseudoCode
  function solution(matrix: number[][]): number {
    let count = 0;
    let visited: string[] = [];

    for (let x = 0; x < matrix.length; x++) {
      for (let y = 0; y < matrix[x].length; y++) {
        if (
          matrix[x][y + 1] !== undefined &&
          matrix[x + 1] !== undefined &&
          matrix[x + 1][y + 1] !== undefined
        ) {
          let current =
            '' +
            matrix[x][y] +
            matrix[x][y + 1] +
            matrix[x + 1][y] +
            matrix[x + 1][y + 1];
          if (!visited.includes(current)) {
            visited.push(current);
            count++;
          }
        }
      }
    }
    return count;
  } // solution
);
