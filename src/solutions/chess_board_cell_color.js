import ProblemInfo from '../info_template.js';

export const chessBoardCellColor = new ProblemInfo;
chessBoardCellColor.name = 'Chess Board Cell Color';
chessBoardCellColor.website = 'Code Signal';
chessBoardCellColor.link = 'https://app.codesignal.com/arcade/intro/level-6/t97bpjfrMDZH8GJhi';
chessBoardCellColor.date = 'Sep 2, 2022';
chessBoardCellColor.difficulty = 'Easy';
chessBoardCellColor.recommendedTime = 10;
chessBoardCellColor.timeToComplete = 7;
chessBoardCellColor.complete = true;
chessBoardCellColor.problem = 'Check if two cell colors on chess board are the same';

/* Problem & Example:
Given two cells on the standard chess board, determine whether they have the same color or not.

Example:
cell1 = A1
cell2 = C3

Equals:
true

-------------------------- Pseudo Code ------------------------
create array with letters a to h

get index of letter + 1


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
 