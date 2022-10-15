import ProblemInfo from '../components/info-class.js';

export const ExtractEachKth = new ProblemInfo(
  'Extract Each Kth', // name
  'Easy', // difficulty
  'Sep 9, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-8/3AgqcKrxbwFhd3Z3R', // link
  'Remove each kth element from array', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  1. create result variable array
  2. loop through array
  3. at each iteration, check if (i+1) modulous k doesn't equal to 0
  4.      if does not equal, add to result array
  5. return result
    `, // pseudoCode
  function solution(inputArray: number[], k: number): number[] {
    const result = [];
    for (let i = 0; i < inputArray.length; i++) {
      if ((i + 1) % k !== 0) {
        result.push(inputArray[i]);
      }
    }
    return result;
  } // solution
);
