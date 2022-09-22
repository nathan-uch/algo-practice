import ProblemInfo from '../info-template.js';

export const GrowingPlant = new ProblemInfo;
GrowingPlant.name = 'Growing Plant';
GrowingPlant.website = 'Code Signal';
GrowingPlant.link = 'https://app.codesignal.com/arcade/intro/level-9/xHvruDnQCx7mYom3T';
GrowingPlant.date = 'Sep 13, 2022';
GrowingPlant.difficulty = 'Easy';
GrowingPlant.recommendedTime = 10;
GrowingPlant.timeToComplete = 7;
GrowingPlant.complete = true;
GrowingPlant.problem = 'Find days plant reaches desired height.';
GrowingPlant.topics = null;
GrowingPlant.pseudoCode = `
1. declare days and current height variable
2. loop starting i at 1 for first day, no condition
3.      change the days to i
4.      add up speed to curheight
5.      check if reached desired height
6.          if yes exit loop
7.      subtract down speed from cur height
8.      check if reached desired height
9.          if yes, exit loop
10. return days
`;

/* Problem & Example:
Caring for a plant can be hard work, but since you tend to it regularly, you have a plant that grows consistently.
Each day, its height increases by a fixed amount represented by the integer upSpeed.
But due to lack of sunlight, the plant decreases in height every night, by an amount represented by downSpeed.
Since you grew the plant from a seed, it started at height 0 initially.
Given an integer desiredHeight, your task is to find how many days it'll take for the plant to reach this height.

Example:
For upSpeed = 100, downSpeed = 10, and desiredHeight = 910, the output should be
solution(upSpeed, downSpeed, desiredHeight) = 10.

*/

function solution(upSpeed, downSpeed, desiredHeight) {
    let days = 0;
    let curHeight = 0;
    for (let i = 1; ; i++) {
        days = i;
        curHeight += upSpeed;
        if (curHeight >= desiredHeight) break;
        curHeight -= downSpeed;
        if (curHeight >= desiredHeight) break;
    }
    return days;
}
