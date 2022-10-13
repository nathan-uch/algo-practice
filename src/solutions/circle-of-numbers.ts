import ProblemInfo from '../components/info-class.js';

export const CircleOfNumbers = new ProblemInfo(
  'Circle of Numbers', // name
  'Easy', // difficulty
  'Sep 3, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-7/vExYvcGnFsEYSt8nQ', // link
  'Find radially opposite number from circle of numbers', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  1. the opposite will be n divided in half plus number
    2. if result greater than n, remove n from result
  3. return result rounded down
  `, // pseudoCode
  function solution(n: number, firstNumber: number): number {
    let result = (n + 1) / 2 + firstNumber;
    if (result > n) {
      result = result - n;
    }
    return Math.floor(result);
  } // solution
);
