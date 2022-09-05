import ProblemInfo from '../info_template.js';

export const CircleOfNumbers = new ProblemInfo;
CircleOfNumbers.name = 'Circle of Numbers';
CircleOfNumbers.website = 'Code Signal';
CircleOfNumbers.link = 'https://app.codesignal.com/arcade/intro/level-7/vExYvcGnFsEYSt8nQ';
CircleOfNumbers.date = 'Sep 3, 2022';
CircleOfNumbers.difficulty = 'Easy';
CircleOfNumbers.recommendedTime = 10;
CircleOfNumbers.timeToComplete = 5;
CircleOfNumbers.complete = true;
CircleOfNumbers.problem = 'Find radially opposite number from circle of numbers';
CircleOfNumbers.topics = null;
CircleOfNumbers.pseudoCode = `
1. the opposite will be n divided in half plus number
    2. if result greater than n, remove n from result
3. return result rounded down
`;

/* Problem & Example:
Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).
Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

Example:
n = 10, first number = 2
result = 7

*/

function solution(n, firstNumber) {
   let result = ((n+1) / 2) + firstNumber
   if (result > n) {
    result = result - n;
   }
   return Math.floor(result);
}
 