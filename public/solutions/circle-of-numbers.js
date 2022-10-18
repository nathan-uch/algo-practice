import ProblemInfo from '../components/info-class.js';
export const CircleOfNumbers = new ProblemInfo('Circle of Numbers', 'Easy', 'Sep 3, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-7/vExYvcGnFsEYSt8nQ', 'Find radially opposite number from circle of numbers', true, false, '', '', `
  1. the opposite will be n divided in half plus number
    2. if result greater than n, remove n from result
  3. return result rounded down
  `, function solution(n, firstNumber) {
    let result = (n + 1) / 2 + firstNumber;
    if (result > n) {
        result = result - n;
    }
    return Math.floor(result);
});
