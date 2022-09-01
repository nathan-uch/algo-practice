import ProblemInfo from '../info_template.js';

export const ArrayReplace = new ProblemInfo;
ArrayReplace.name = 'Array Replace';
ArrayReplace.website = 'Code Signal';
ArrayReplace.link = 'https://app.codesignal.com/arcade/intro/level-6/mCkmbxdMsMTjBc3Bm/solutions';
ArrayReplace.date = 'Sep 1, 2022';
ArrayReplace.difficulty = 'Easy';
ArrayReplace.recommendedTime = 10;
ArrayReplace.timeToComplete = 3;
ArrayReplace.complete = true;
ArrayReplace.problem = 'Substitute elements in an array.';

/* Problem & Example:
Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

Example:
[1, 2, 1]

Equals:
[3, 2, 3]
-------------------------- Pseudo Code ------------------------

create empty array for result
loop over input array
    check if element equals to replace element
        if yes, push the sub element
        else push element to result
return result

*/

function solution(inputArray, elemToReplace, substitutionElem) {
    const result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === elemToReplace) {
            result.push(substitutionElem);
        } else {
            result.push(inputArray[i]);
        }
    }
    return result;
}
 