import ProblemInfo from '../info_template.js';

export const EvenDigitsOnly = new ProblemInfo;
EvenDigitsOnly.name = 'Even Digits Only';
EvenDigitsOnly.website = 'Code Signal';
EvenDigitsOnly.link = 'https://app.codesignal.com/arcade/intro/level-6/6cmcmszJQr6GQzRwW/solutions';
EvenDigitsOnly.date = 'Sep 1, 2022';
EvenDigitsOnly.difficulty = 'Easy';
EvenDigitsOnly.recommendedTime = 5;
EvenDigitsOnly.timeToComplete = 2;
EvenDigitsOnly.complete = true;
EvenDigitsOnly.problem = 'Check if all digits of the given integer are even.';
EvenDigitsOnly.topics = null;
EvenDigitsOnly.pseudoCode = `
1. convert to string
2. loop over each element individually and check if there is remainder from modulous 2
    3. if yes, return false
4. if no, return true
`;

/* Problem & Example:

Example:
n1 = 248622
n2 = 642386

Equals:
n1 = true
n2 = false
*/

function solution(n) {
    const s = n.toString();
    for (let i = 0; i < s.length; i++) {
        if ((s[i] % 2) > 0) return false
    }
    return true;
}
