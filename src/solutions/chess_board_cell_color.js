import ProblemInfo from '../info_template.js';

export const ChessBoardCellColor = new ProblemInfo;
ChessBoardCellColor.name = 'Chess Board Cell Color';
ChessBoardCellColor.website = 'Code Signal';
ChessBoardCellColor.link = 'https://app.codesignal.com/arcade/intro/level-6/t97bpjfrMDZH8GJhi';
ChessBoardCellColor.date = 'Sep 2, 2022';
ChessBoardCellColor.difficulty = 'Easy';
ChessBoardCellColor.recommendedTime = 10;
ChessBoardCellColor.timeToComplete = 7;
ChessBoardCellColor.complete = true;
ChessBoardCellColor.problem = 'Check if two cell colors on chess board are the same';
ChessBoardCellColor.topics = null;
ChessBoardCellColor.pseudoCode = `
1. create array with letters a to h
2. get index of letter + 1
3. check if the sum of both indexes are even or odd,
    4. if even it's dark
    5. if odd it's light

5. check if both are equal
6. return true if yes
7. return false if not
`;

/* Problem & Example:
Given two cells on the standard chess board, determine whether they have the same color or not.

Example:
cell1 = A1
cell2 = C3
result = true

*/

function solution(c1, c2) {
   const alpha = ['A','B','C','D','E','F','G','H'];
   
   const one = [(alpha.indexOf(c1[0]) + 1), c1[1]];
   const two = [(alpha.indexOf(c2[0]) + 1), c2[1]];
   let result1 = null;
   let result2 = null;

   if ((parseInt(one[0]) + parseInt(one[1])) % 2 === 0) {
    result1 = 'dark';
   } else {
    result1 = 'light';
   }

   if ((parseInt(two[0]) + parseInt(two[1])) % 2 === 0) {
    result2 = 'dark';
   } else {
    result2 = 'light';
   }

    if (result1 === result2) return true;
    return false;
}
 