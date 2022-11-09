import ProblemInfo from '../components/info-class.js';

interface col {
  1: number[];
  2: number[];
  3: number[];
  4: number[];
  5: number[];
  6: number[];
  7: number[];
  8: number[];
  9: number[];
}

interface sq {
  1: number[];
  2: number[];
  3: number[];
}

export const Sudoku = new ProblemInfo(
  'Sudoku', // name
  'Medium', // difficulty
  'Nov 9th, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-12/tQgasP8b62JBeirMS', // link
  'Check if a 9x9 sudoku grid is correct.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  Needs:
  1. check 3x3 has 1-9
  2. check each position does not have repeated number in row and col

  loop through grid rows
    create variable to hold unique numbers
    check if variable already has current number,
      if not, add to variable
      if yes, return false

  loop through codes
    create variable to hold unique numbers
    check if variable already has current number,
      if not, add to variable
      if yes, return false

  return true
  `, // pseudoCode
  function solution(grid: number[][]): boolean {
    let result = true;
    let col: col = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
    };
    let sq: sq = {
      1: [],
      2: [],
      3: [],
    };

    for (let r = 0; r < grid.length; r++) {
      let row: any[] = [];

      if (sq[1].length === 9) {
        sq = { 1: [], 2: [], 3: [] };
      }
      for (let c = 0; c < grid[r].length; c++) {
        if (row.includes(grid[r][c])) {
          result = false;
          break;
        }
        row.push(grid[r][c]);
        if (col[(c + 1) as keyof typeof col].includes(grid[r][c])) {
          result = false;
          break;
        }
        col[(c + 1) as keyof typeof col].push(grid[r][c]);

        if (c <= 2) {
          if (sq[1].includes(grid[r][c])) {
            result = false;
            break;
          }
          sq[1].push(grid[r][c]);
        } else if (c <= 5) {
          if (sq[2].includes(grid[r][c])) {
            result = false;
            break;
          }
          sq[2].push(grid[r][c]);
        } else if (c <= 8) {
          if (sq[3].includes(grid[r][c])) {
            result = false;
            break;
          }
          sq[3].push(grid[r][c]);
        }
        if (result === false) break;
      }
    }
    return result;
  } // solution
);
