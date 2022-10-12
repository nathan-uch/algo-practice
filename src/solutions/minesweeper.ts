import ProblemInfo from '../components/info-class.js';

export const Minesweeper = new ProblemInfo(
  'Minesweeper', // name
  'Medium', // difficulty
  'Aug 30, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-5/ZMR5n7vJbexnLrgaM', // link
  'Create minesweeper board with numbers according to true/false matrix', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  1. Loop through each array in matrix
    2. create an array with 0s according to matrix length (cols and rows)
  3. Loop again through matrix arrays
    4. check if current value is true
        5. if value is true
            6. if not bottom row -                              add one to value at bottom
            7. if not bottom row and last element of row -      add one to value at bottom right
            8. if not last element of row and not last row -    add one to value at bottom left
            9. if not first element of row -                    add one to value at left
            10. if not last element of row -                     add one to value at right
            11. if not last row -                                add one to value at top
            12. if not first row and not first element of row -  add one to value at top left
            13. if not first row and not last element of row -   add one to value at top right
  `, // pseudoCode
  function solution(matrix: boolean[][]): number[][] {
    const board = [];
    for (let y = 0; y < matrix.length; y++) {
      const row = [];
      for (let x = 0; x < matrix[y].length; x++) {
        row[x] = 0;
      }
      board.push(row);
    }
    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] === true) {
          if (y < matrix.length-1)                                { board[y+1][x]++;  }   // bottom
          if ((y < matrix.length-1) && (x < matrix[y].length-1))  { board[y+1][x+1]++; }  // bottom right
          if ((x > 0) && (y < matrix.length-1))                   { board[y+1][x-1]++; }  // bottom left
          if (x > 0)                                              { board[y][x-1]++; }    // left
          if (x < matrix[y].length-1)                             { board[y][x+1]++; }    // right
          if (y > 0)                                              { board[y-1][x]++; }    // top
          if (y > 0 && x > 0)                                     { board[y-1][x-1]++; }  // top left
          if ((y > 0) && (x < matrix[y].length -1))               { board[y-1][x+1]++; }  // top right
        }
      }
    }
    return board;
  } // solution
);
