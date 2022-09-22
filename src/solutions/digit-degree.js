import ProblemInfo from '../info-template.js';

export const DigitDegree = new ProblemInfo;
DigitDegree.name = 'Digit Degree';
DigitDegree.website = 'Code Signal';
DigitDegree.link = 'https://app.codesignal.com/arcade/intro/level-9/hoLtYWbjdrD2PF6yo';
DigitDegree.date = 'Sep 16, 2022';
DigitDegree.difficulty = 'Medium';
DigitDegree.recommendedTime = 15;
DigitDegree.timeToComplete = 15;
DigitDegree.complete = true;
DigitDegree.problem = 'From a number\'s sum of digits, find the single digit number.';
DigitDegree.topics = '!Recursion';
DigitDegree.pseudoCode = `
Steps needed:
- Split to single digits
- Add digits to check if single
- could use recursion until

1. Make a string from the number
2. loop over the string adding them all together
3.    check if result is a single digit
4.    if not, repeat process
5.    if yes, return sum

`;

/* Problem & Example:
Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.
Given an integer, find its digit degree.

For n = 5, the output should be
solution(n) = 0;

For n = 100, the output should be
solution(n) = 1.
1 + 0 + 0 = 1.

For n = 91, the output should be
solution(n) = 2.
9 + 1 = 10 -> 1 + 0 = 1.
*/

function solution(n) {
  const getSum = (num, count)=> {
    let str = num.toString();
    if (str.length === 1) {
      return count;
    } else if (str.length > 1) {
      count++;
      let sum = 0;
      for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
      }
      return getSum(sum, count)
    }
  }

  return getSum(n, 0);
}
