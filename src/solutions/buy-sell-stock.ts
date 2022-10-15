import ProblemInfo from '../components/info-class.js';

export const BestTimeToBuySellStock = new ProblemInfo(
  'Best Time to Buy and Sell Stock', // name
  'Easy', // difficulty
  'Sep 8, 2022', // date
  'Leet Code / Neet Code', // source
  'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', // link
  'Chose a day to buy and sell for highest profit.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  'Sliding Window', // topics
  `
  1. declare max profit variable, left pointer at 0, right pointer at 1
  2. while rightp ointer is greater than array length
  3.      check if left pointer is less than right pointer
  4.          if yes, get the profit
  5.          check if max profit is lower than current profit
  6.              if yes, replace max profit
  7.      if left pointer is not less than right poitner
  8.          replace the left pointer with right pointer for new low
  9.      increment right pointer
  10. return max profit
  `, // pseudoCode
  function solution(prices: number[]): number {
    let maxP = 0;
    let l = 0;
    let r = 1;

    while (r < prices.length) {
      if (prices[l] < prices[r]) {
        let profit = prices[r] - prices[l];
        if (profit > maxP) maxP = profit;
      } else {
        l = r;
      }
      r++;
    }
    return maxP;
  } // solution
);
