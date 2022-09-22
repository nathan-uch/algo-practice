import ProblemInfo from '../info-template.js';

export const FirstDigit = new ProblemInfo;
FirstDigit.name = 'First Digit';
FirstDigit.website = 'Code Signal';
FirstDigit.link = 'h';
FirstDigit.date = 'Sep 10, 2022';
FirstDigit.difficulty = 'Easy';
FirstDigit.recommendedTime = 10;
FirstDigit.timeToComplete = 7;
FirstDigit.complete = true;
FirstDigit.problem = 'First leftmost digit from a string';
FirstDigit.topics = '';
FirstDigit.usedHelp = false;
FirstDigit.pseudoCode = `
1. Loop through string
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
    let result = null;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            continue
        } else if (!isNaN(s[i])) {
            result = s[i]
            break
        }
    }
    return result;
}
