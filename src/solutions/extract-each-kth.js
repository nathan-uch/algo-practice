import ProblemInfo from '../info-template.js';

export const ExtractEachKth = new ProblemInfo;
ExtractEachKth.name = 'Extract Each Kth';
ExtractEachKth.website = 'Code Signal';
ExtractEachKth.link = 'https://app.codesignal.com/arcade/intro/level-8/3AgqcKrxbwFhd3Z3R';
ExtractEachKth.date = 'Sep 9, 2022';
ExtractEachKth.difficulty = 'Easy';
ExtractEachKth.recommendedTime = 10;
ExtractEachKth.timeToComplete = 8;
ExtractEachKth.complete = true;
ExtractEachKth.problem = 'Remove each kth element from array';
ExtractEachKth.topics = null;
ExtractEachKth.pseudoCode = `
1. create result variable array
2. loop through array
3. at each iteration, check if (i+1) modulous k doesn't equal to 0
4.      if does not equal, add to result array
5. return result
`;

/* Problem & Example:
Given array of integers, remove each kth element from it.

Example:
For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
solution(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].

*/

function solution(inputArray, k) {
    const result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if ((i+1) % k !== 0) {
           result.push(inputArray[i]);
        }
    }
    return result;
}
