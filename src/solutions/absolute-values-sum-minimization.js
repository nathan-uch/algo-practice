import ProblemInfo from '../info-template.js';

export const AbsoluteValuesSumMinimization = new ProblemInfo;
AbsoluteValuesSumMinimization.name = 'Absolute Values Sum Minimization';
AbsoluteValuesSumMinimization.website = 'Code Signal';
AbsoluteValuesSumMinimization.link = 'https://app.codesignal.com/arcade/intro/level-7/ZFnQkq9RmMiyE6qtq';
AbsoluteValuesSumMinimization.date = 'Sep 4, 2022';
AbsoluteValuesSumMinimization.difficulty = 'Medium';
AbsoluteValuesSumMinimization.recommendedTime = 15;
AbsoluteValuesSumMinimization.timeToComplete = 15;
AbsoluteValuesSumMinimization.complete = true;
AbsoluteValuesSumMinimization.problem = 'From array, find value which is closest to all other values.';
AbsoluteValuesSumMinimization.topics = null;
AbsoluteValuesSumMinimization.pseudoCode = `
1. declare new variable to hold the first num in array: a[0] as result
2. declare new variable for last num value
3. declare new variable as last abs value

4. loop through array
    5. declare new variable as current abs value
    6. loop through array and get abs value by adding it to value at each iteration

    7. if this is the first num, save the abs value to variable (prev value) for comparison
    8. if current abs value equals last abs value
        9. compare the original array values and save smaller value as result
    10. else, compare current abs value to last abs value,
        11. if current abs value is less than last abs value,
            12. current abs value equals last abs value
            13. result equals to original value in array
14. return result
`;

/* Problem & Example:
Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a.
In other words, find the element x in a, which minimizes the following sum:
abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
(where abs denotes the absolute value)
If there are several possible answers, output the smallest one.

Example:
[2, 4, 7] solution(a) = 4
for x = 2, the value will be abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7.
for x = 4, the value will be abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5.
for x = 7, the value will be abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8.

[2, 3] solution(a) = 2
for x = 2, the value will be abs(2 - 2) + abs(3 - 2) = 1.
for x = 3, the value will be abs(2 - 3) + abs(3 - 3) = 1.
Because there is a tie, the smallest x between x = 2 and x = 3 is the answer.

*/

function solution(a) {
   let result = a[0];
   let lastNumValue = null;
   let lastAbsValue = 0;

   for (let i = 0; i <a.length; i++) {
        let curAbsValue = 0;
        for (let n = 0; n < a.length; n++) {
            curAbsValue += Math.abs(a[n] - a[i]);
        }
        if (i === 0) {
            lastAbsValue = curAbsValue;
            lastNumValue = a[i];
        } else if (curAbsValue === lastAbsValue) {
            if (lastNumValue > a[i]) lastNumValue === a[i];
        } else if (curAbsValue < lastAbsValue) {
            lastAbsValue = curAbsValue;
            lastNumValue = a[i];
        }
        result = lastNumValue;
   }
   return result;
}
