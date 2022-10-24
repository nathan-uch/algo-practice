import ProblemInfo from '../components/info-class.js';
export const ChessKnight = new ProblemInfo('Chess Knight', 'Medium', 'Oct 24th, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-11/pwRLrkrNpnsbgMndb/solutions', 'Check how many available moves for a knight piece on chess board.', true, false, '', '', `
  1. check x axis
  2.  if 1 space from edge, remove 2
  3.  if at edge, remove 4
  4. check y axis
  5.  if 1 space from edge and current count is 2 (means there is an overlap)
  6.    remove only 1
  7.  if 1 space from edge (else)
  8.    remove 2
  9.  if 2 spaces from edge and current count is 4 (means there is overlap)
  10.   remove 2
  11. if 2 spaces from edge (else)
  12.   remove 4
    `, function solution(cell) {
    let count = 8;
    let x = Number(cell[1]);
    let y = cell[0];
    if (x === 2 || x === 7) {
        count -= 2;
    }
    else if (x === 1 || x === 8) {
        count -= 4;
    }
    if (y === 'b' || y === 'g') {
        if (count === 4) {
            count -= 1;
        }
        else {
            count -= 2;
        }
    }
    else if (y === 'a' || y === 'h') {
        if (count === 4) {
            count -= 2;
        }
        else {
            count -= 4;
        }
    }
    return count;
});
