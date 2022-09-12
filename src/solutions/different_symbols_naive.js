import ProblemInfo from '../info_template.js';

export const DifferentSymbolsNaive = new ProblemInfo;
DifferentSymbolsNaive.name = 'Different Symbols Naive';
DifferentSymbolsNaive.website = 'Code Signal';
DifferentSymbolsNaive.link = 'https://app.codesignal.com/arcade/intro/level-8/8N7p3MqzGQg5vFJfZ/solutions';
DifferentSymbolsNaive.date = 'Sep 11, 2022';
DifferentSymbolsNaive.difficulty = 'Easy';
DifferentSymbolsNaive.recommendedTime = 10;
DifferentSymbolsNaive.timeToComplete = 2;
DifferentSymbolsNaive.complete = true;
DifferentSymbolsNaive.problem = 'Given a string, find the number of different characters in it.';
DifferentSymbolsNaive.topics = null;
DifferentSymbolsNaive.pseudoCode = `
1. create variable for count and array for holding letters
2. loop through string
3.      if the array doesn't contain the current char
4.          push to array
5.          increment count
6. at end of loop, return count
`;

/* Problem & Example:
Given a string, find the number of different characters in it.

Example:
For s = "cabca", the output should be
solution(s) = 3.

There are 3 different characters a, b and c.

*/

function solution(s) {
    let count = 0;
    const preivous = [];
    for (let i = 0; i < s.length; i++) {
        if (!preivous.includes(s[i])) {
            preivous.push(s[i]);
            count++;
        }
    }
    return count;
}
 