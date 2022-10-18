import ProblemInfo from '../components/info-class.js';

export const KnapsackLight = new ProblemInfo(
  'Knapsack Light', // name
  'Easy', // difficulty
  'Sep 14, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-9/r9azLYp2BDZPyzaG2', // link
  'From your strength, item weight and value, pick between two items to carry.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  1. if the max weight is greater than both weights together
  2.      if yes, return sum of values
  3. if the max is greater than any of the weights
  4.      if not, return 0
  5. if max is greater or equal to w1 and less than w2 return value 1
  6. if max is greater or equal to w2 and less than w1, return value 2
  7. if v1 is greater than v2 return value 1,
  8. return v2
    `, // pseudoCode
  function solution(
    v1: number,
    w1: number,
    v2: number,
    w2: number,
    maxW: number
  ): number {
    if (maxW >= w1 + w2) return v1 + v2;
    if (maxW < w1 && maxW < w2) return 0;
    if (maxW >= w1 && maxW < w2) return v1;
    if (maxW >= w2 && maxW < w1) return v2;
    if (v1 > v2) return v1;
    return v2;
  } // solution
  /* function solution2(
    value1: number,
    weight1: number,
    value2: number,
    weight2: number,
    maxW: number
  ) {
    return Math.max(
      maxW >= weight1 && value1,
      maxW >= weight2 && value2,
      maxW >= weight1 + weight2 && value1 + value2
    );
  } solution2, optional

  Notes:
  Math.max() returns largest of the input numbers given as parameters
  && checks for first falsy value and returns it
  if both are truthy, returns the last value
  Example: result = 0 && 8        [equals 0]
          result = 'p' && 12     [equals 12]

  from solution:
  if maxW >= w1 is falsy, give value 1
  if maxW >= w2 is falsy, give value 2
  if maxW >= w1 + w2, give both values
  */
);
