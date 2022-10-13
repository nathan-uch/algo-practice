import ProblemInfo from '../components/info-class.js';

export const DepositProfit = new ProblemInfo(
  'Deposit Profit', // name
  'Medium', // difficulty
  'Sep 3, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-7/8PxjMSncp9ApA4DAb', // link
  'Given a initial deposit and annual growth rate, find out how long to reach threshold.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  1. create a count
  2. create an amount starting at deposit
  3. get the percentage from the rate by dividing by 100 and adding 1
  4. while loop, check if amount is less than the threshold
    5. if not, increment count
    6. add the rate to the amount
  7. return amount
    `, // pseudoCode
  function solution(deposit: number, rate: number, threshold: number): number {
    let count = 0;
    let amount = deposit;
    const percent = 1 + rate / 100;
    while (amount < threshold) {
      count++;
      amount = amount * percent;
    }
    return count;
  } // solution
);
