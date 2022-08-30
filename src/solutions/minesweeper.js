import ProblemInfo from '../info_template.js';

export const Minesweeper = new ProblemInfo;
Minesweeper.name = 'Minesweeper';
Minesweeper.website = 'Code Signal';
Minesweeper.link = 'https://app.codesignal.com/arcade/intro/level-5/ZMR5n7vJbexnLrgaM';
Minesweeper.date = 'Aug 30, 2022';
Minesweeper.difficulty = 'Medium';
Minesweeper.recommendedTime = 30 ;
Minesweeper.timeToComplete = 60;
Minesweeper.complete = true;
Minesweeper.problem = 'Create minesweeper board with numbers according to true/false matrix';

/* Problem & Example:

From a flagged matrix, give the numbers of the minesweeper game.

Matrix:

matrix =
[[true, false, false],
 [false, true, false],
 [false, false, false]]

Equals:
[[1, 2, 1],
 [2, 1, 1],
 [1, 1, 1]]

Steps:
the 'true' are flags (meaning they are mines)
the surrounding boxes should display how many mines they are touching

-------------------------- Pseudo Code ------------------------

Loop through each array in matrix
    create an array with 0s according to matrix length (cols and rows)

Loop again through matrix arrays
    check if current value is true
        if true, add to each surrounding element positions

*/

function solution(matrix) {
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
                if (y < matrix.length-1)                                { board[y+1][x]++;  }    // bottom
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
}