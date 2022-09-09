import ProblemInfo from '../info_template.js';

export const BestTimeToBuySellStock = new ProblemInfo;
BestTimeToBuySellStock.name = 'Best Time to Buy and Sell Stock';
BestTimeToBuySellStock.website = 'Leet Code / Neet Code';
BestTimeToBuySellStock.link = 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/';
BestTimeToBuySellStock.date = 'Sep 8, 2022';
BestTimeToBuySellStock.difficulty = 'Easy';
BestTimeToBuySellStock.recommendedTime = 10;
BestTimeToBuySellStock.timeToComplete = 25;
BestTimeToBuySellStock.complete = true;
BestTimeToBuySellStock.problem = 'Chose a day to buy and sell for highest profit.';
BestTimeToBuySellStock.topics = 'Sliding Window';
BestTimeToBuySellStock.pseudoCode = `
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
`;

/* Problem & Example:
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

function solution(prices) {
    let maxP = 0;
    let l = 0;
    let r = 1;
    
    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            let profit = prices[r] - prices[l]
            if (profit > maxP) maxP = profit;
        } else {
            l = r;
        }
        r++;
    }
    return maxP;
}
