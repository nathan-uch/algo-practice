import ProblemInfo from '../info-template.js';

export const IsDigit = new ProblemInfo;
IsDigit.name = 'Is Digit';
IsDigit.website = 'Code Signal';
IsDigit.link = 'https://leetcode.com/problems/two-sum/';
IsDigit.date = 'Oct 8th, 2022';
IsDigit.difficulty = 'Easy';
IsDigit.recommendedTime = 5;
IsDigit.timeToComplete = 1;
IsDigit.complete = true;
IsDigit.problem = 'Check if digit';
IsDigit.topics = '';
IsDigit.usedHelp = false;
IsDigit.pseudoCode = `
Steps:

`;

/* Problem & Example:
Determine if the given character is a digit or not.

For symbol = '0', the output should be
solution(symbol) = true;

For symbol = '-', the output should be
solution(symbol) = false.
*/

function solution(symbol) {
  if(isNaN(symbol)) return false;
  return true
}
