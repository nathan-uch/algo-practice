import ProblemInfo from '../components/info-class.js';
export const ExtractEachKth = new ProblemInfo('Extract Each Kth', 'Easy', 'Sep 9, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-8/3AgqcKrxbwFhd3Z3R', 'Remove each kth element from array', true, false, '', '', `
  1. create result variable array
  2. loop through array
  3. at each iteration, check if (i+1) modulous k doesn't equal to 0
  4.      if does not equal, add to result array
  5. return result
    `, function solution(inputArray, k) {
    const result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if ((i + 1) % k !== 0) {
            result.push(inputArray[i]);
        }
    }
    return result;
});
//# sourceMappingURL=extract-each-kth.js.map