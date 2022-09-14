import ProblemInfo from '../info_template.js';

export const KnapsackLight = new ProblemInfo;
KnapsackLight.name = 'Knapsack Light';
KnapsackLight.website = 'Code Signal';
KnapsackLight.link = 'https://app.codesignal.com/arcade/intro/level-9/r9azLYp2BDZPyzaG2';
KnapsackLight.date = 'Sep 14, 2022';
KnapsackLight.difficulty = 'Easy';
KnapsackLight.recommendedTime = 5;
KnapsackLight.timeToComplete = 6;
KnapsackLight.complete = true;
KnapsackLight.problem = 'From your strength, item weight and value, pick between two items to carry.';
KnapsackLight.topics = null;
KnapsackLight.pseudoCode = `
1. if the max weight is greater than both weights together
2.      if yes, return sum of values
3. if the max is greater than any of the weights
4.      if not, return 0
5. if max is greater or equal to w1 and less than w2 return value 1
6. if max is greater or equal to w2 and less than w1, return value 2
7. if v1 is greater than v2 return value 1,
8. return v2
`;

/* Problem & Example:
You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. 
What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?
Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.

Example:
For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 8, the output should be
solution(value1, weight1, value2, weight2, maxW) = 10.
You can only carry the first item.

For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 9, the output should be
solution(value1, weight1, value2, weight2, maxW) = 16.
You're strong enough to take both of the items with you.

For value1 = 5, weight1 = 3, value2 = 7, weight2 = 4, and maxW = 6, the output should be
solution(value1, weight1, value2, weight2, maxW) = 7.
You can't take both items, but you can take any of them.

*/

function solution(v1, w1, v2, w2, maxW) {
    if(maxW >= (w1 + w2)) return v1 + v2;
    if(maxW < w1 && maxW < w2) return 0;
    if(maxW >= w1 && maxW < w2) return v1;
    if(maxW >= w2 && maxW < w1) return v2;
    if(v1 > v2) return v1
    return v2
}

/* 
function solution(value1, weight1, value2, weight2, maxW) {
    return Math.max(
        maxW >= weight1 && value1,
        maxW >= weight2 && value2,
        maxW >= weight1 + weight2 && value1 + value2
    );
}

Notes:
Math.max() returns largest of the input numbers given as parameters
&& checks for first falsy value and returns it
if both are truthy, returns the last value
Example: result = 0 && 8        [equals 0]
         result = 'p' && 12     [equals 12]

from solution:
if maxW >= w1 is falsy, give value 1
if maxW >= w2 is falsy, give value 2
if maxW >= w1 + w2, give both values

*/