import ProblemInfo from '../info-template.js';

export const LongestDigitsPrefix = new ProblemInfo;
LongestDigitsPrefix.name = 'Longest Digits Prefix';
LongestDigitsPrefix.website = 'Code Signal';
LongestDigitsPrefix.link = 'https://app.codesignal.com/arcade/intro/level-9/hoLtYWbjdrD2PF6yo';
LongestDigitsPrefix.date = 'Sep 15, 2022';
LongestDigitsPrefix.difficulty = 'Easy';
LongestDigitsPrefix.recommendedTime = 10;
LongestDigitsPrefix.timeToComplete = 4;
LongestDigitsPrefix.complete = true;
LongestDigitsPrefix.problem = 'Retrieve longest prefix containing only digits.';
LongestDigitsPrefix.topics = null;
LongestDigitsPrefix.pseudoCode = `
1. declare variable for result
2. loop over string
3.      if current number is number add to result
4.      if not end loop, return result
`;

/* Problem & Example:
Given a string, output its longest prefix which contains only digits.

Example:
For inputString = "123aa1", the output should be
solution(inputString) = "123".
*/

function solution(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if(!isNaN(s[i]) && s[i] !== ' ') {
            result += s[i];
        } else {
            break;
        }
    }
    return result;
}
