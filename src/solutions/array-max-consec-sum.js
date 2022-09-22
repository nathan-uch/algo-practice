import ProblemInfo from '../info-template.js';

export const ArrayMaxConsecutiveSum = new ProblemInfo;
ArrayMaxConsecutiveSum.name = 'Array Max Consecutive Sum';
ArrayMaxConsecutiveSum.website = 'Code Signal';
ArrayMaxConsecutiveSum.link = 'https://app.codesignal.com/arcade/intro/level-8/Rqvw3daffNE7sT7d5';
ArrayMaxConsecutiveSum.date = 'Sep 12, 2022';
ArrayMaxConsecutiveSum.difficulty = 'Easy';
ArrayMaxConsecutiveSum.recommendedTime = 10;
ArrayMaxConsecutiveSum.timeToComplete = 1;
ArrayMaxConsecutiveSum.complete = true;
ArrayMaxConsecutiveSum.problem = 'Find the max possible sum of some of its k consecutive elements from array of int.';
ArrayMaxConsecutiveSum.topics = null;
ArrayMaxConsecutiveSum.pseudoCode = `
1. create result variable
2. loop over array
3.      get the last index (last index of value to add to sum)
4.      check if the value at the last index is undefined
5.          if yes, end loop
6.      if not, declare sum at 0
7.      loop through array but only through values to be added to sum, according to k
8.          at each value, add to sum
9.      at end of sum loop, check if the highest value is less than sum
10.         if yes, replace the highest value with sum
11. at end of loop, return highest value
`;

/* Problem & Example:
Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example:
For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
solution(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8.

*/

function solution(arr, k) {
    let highest = 0;
    for (let i = 0; i < arr.length; i++) {
        const lastIndex = i + k - 1;
        if (arr[lastIndex] === undefined) break;
        let sum = 0;
        for (let num = i; num <= lastIndex; num++) {
            sum += arr[num];
        }
        if (highest < sum) highest = sum;
    }
    return highest;
}
