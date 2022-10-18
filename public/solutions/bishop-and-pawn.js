import ProblemInfo from '../components/info-class.js';
export const BishopAndPawn = new ProblemInfo('Bishop and Pawn', 'Easy', 'Sep 17, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-9/6M57rMTFB9MeDeSWo', 'Check if bishop can capture pawn in one move on chess board.', true, false, '', '', `
  Steps breakdown:
  - Find all positions bishop can move (diagonally)
  - Check if pawn is in one of those positions

  1. create letters array for checking if larger or smaller
  2. convert positions to array, and first letter to number position
  3. check if the difference between x and y axis of each is equal (use absolute)
  4. if yes, return true
  5. if not, return false
    `, function solution(bishop, pawn) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let b = [letters.indexOf(bishop[0]) + 1, Number(bishop[1])];
    let p = [letters.indexOf(pawn[0]) + 1, Number(pawn[1])];
    let xDif = Math.abs(b[0] - p[0]);
    let yDif = Math.abs(b[1] - p[1]);
    if (xDif === yDif)
        return true;
    return false;
});
