import ProblemInfo from '../info-template.js';

export const ArrayReplace = new ProblemInfo();
ArrayReplace.name = 'Array Replace';
ArrayReplace.website = 'Code Signal';
ArrayReplace.link =
  'https://app.codesignal.com/arcade/intro/level-6/mCkmbxdMsMTjBc3Bm/solutions';
ArrayReplace.date = 'Sep 1, 2022';
ArrayReplace.difficulty = 'Easy';
ArrayReplace.recommendedTime = 10;
ArrayReplace.timeToComplete = 3;
ArrayReplace.complete = true;
ArrayReplace.problem = 'Substitute elements in an array.';
ArrayReplace.topics = null;
ArrayReplace.pseudoCode = `
1. create empty array for result
2. loop over input array
    3. check if element equals to replace element
        4. if yes, push the sub element
        5. else push element to result
6. return result
`;

/* Problem & Example:
Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

Example:
[1, 2, 1]
result = [3, 2, 3]

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
