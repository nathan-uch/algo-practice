import ProblemInfo from '../components/info-class.js';
export const ArrayReplace = new ProblemInfo('Array Replace', 'Easy', 'Sep 1, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-6/mCkmbxdMsMTjBc3Bm/solutions', 'Replace elements in an array.', true, false, '', '', `
  1. create empty array for result
  2. loop over input array
      3. check if element equals to replace element
          4. if yes, push the sub element
          5. else push element to result
  6. return result
    `, function solution(inputArray, elemToReplace, substitutionElem) {
    const result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === elemToReplace) {
            result.push(substitutionElem);
        }
        else {
            result.push(inputArray[i]);
        }
    }
    return result;
});
//# sourceMappingURL=array-replace.js.map