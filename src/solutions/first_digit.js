import ProblemInfo from '../info_template.js';

export const FirstDigit = new ProblemInfo;
FirstDigit.name = 'First Digit';
FirstDigit.website = 'Code Signal';
FirstDigit.link = 'h';
FirstDigit.date = 'Sep 10, 2022';
FirstDigit.difficulty = 'Easy';
FirstDigit.recommendedTime = 10;
FirstDigit.timeToComplete = 3;
FirstDigit.complete = true;
FirstDigit.problem = 'First leftmost digit from a string';
FirstDigit.topics = '';
FirstDigit.usedHelp = false;
FirstDigit.pseudoCode = `
1. Loop through string starting from length
2. check if is a digit
3. return digit
`;

/* Problem & Example:
Find the leftmost digit that occurs in a given string.

Example:
For inputString = "var_1__Int", the output should be
solution(inputString) = '1';
For inputString = "q2q-q", the output should be
solution(inputString) = '2';
For inputString = "0ss", the output should be
solution(inputString) = '0'.

*/

function solution(s) {
    const last = s.length - 1;
    for (let i = last; i < 0; i--) {
        console.log(s[i])
        if (!isNaN(s[i])) return s[i];
    }
}