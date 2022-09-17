import ProblemInfo from '../info_template.js';

export const BishopAndPawn = new ProblemInfo;
BishopAndPawn.name = 'Reverse Linked List';
BishopAndPawn.website = 'Code Signal';
BishopAndPawn.link = 'https://app.codesignal.com/arcade/intro/level-9/6M57rMTFB9MeDeSWo';
BishopAndPawn.date = 'Sep 17, 2022';
BishopAndPawn.difficulty = 'Easy';
BishopAndPawn.recommendedTime = 10;
BishopAndPawn.timeToComplete = 10;
BishopAndPawn.complete = true;
BishopAndPawn.problem = 'Check if bishop can capture pawn in one move on chess board.';
BishopAndPawn.topics = null;
BishopAndPawn.usedHelp = false;
BishopAndPawn.pseudoCode = `
Steps breakdown:
- Find all positions bishop can move (diagonally)
- Check if pawn is in one of those positions

1. create letters array for checking if larger or smaller
2. convert positions to array, and first letter to number position
3. check if the difference between x and y axis of each is equal (use absolute)
4. if yes, return true
5. if not, return false

`;

/* Problem & Example:


*/

function solution(bishop, pawn) {
  const letters = ['a','b','c','d','e','f','g','h'];
  let b = [letters.indexOf(bishop[0]) +1, Number(bishop[1])];
  let p = [letters.indexOf(pawn[0]) +1, Number(pawn[1])];
  let xDif = Math.abs(b[0] - p[0]);
  let yDif = Math.abs(b[1] - p[1]);
  if (xDif === yDif) return true;
  return false;
}
