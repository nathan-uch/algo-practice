import ProblemInfo from '../components/info-class.js';
export const KnapsackLight = new ProblemInfo('Knapsack Light', 'Easy', 'Sep 14, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-9/r9azLYp2BDZPyzaG2', 'From your strength, item weight and value, pick between two items to carry.', true, false, '', '', `
  1. if the max weight is greater than both weights together
  2.      if yes, return sum of values
  3. if the max is greater than any of the weights
  4.      if not, return 0
  5. if max is greater or equal to w1 and less than w2 return value 1
  6. if max is greater or equal to w2 and less than w1, return value 2
  7. if v1 is greater than v2 return value 1,
  8. return v2
    `, function solution(v1, w1, v2, w2, maxW) {
    if (maxW >= w1 + w2)
        return v1 + v2;
    if (maxW < w1 && maxW < w2)
        return 0;
    if (maxW >= w1 && maxW < w2)
        return v1;
    if (maxW >= w2 && maxW < w1)
        return v2;
    if (v1 > v2)
        return v1;
    return v2;
});
//# sourceMappingURL=knapsack-light.js.map