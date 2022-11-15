import ProblemInfo from '../components/info-class.js';

export const Candies = new ProblemInfo(
  'Candies', // name
  'Easy', // difficulty
  'Nov 14th, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/code-arcade/intro-gates/DdNKFA3XCX6XN7bNz', // link
  'Find out how many candies are given equally to number of people.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  loop to get number,
    check if current index times candies is equal to number of people
      if yes, return number times i
    check if current index time candies is greater than number of people
      if yes, return number time previous index
  `, // pseudoCode
  function solution(n: number, m: number): number {
    let res = 0;
    for (let i = 0; i <= m; i++) {
      if (i * n === m) {
        res = n * i;
        break;
      } else if (i * n > m) {
        res = n * (i - 1);
        break;
      }
    }
    return res;
  } // solution
);
