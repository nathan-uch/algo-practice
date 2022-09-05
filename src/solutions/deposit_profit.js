import ProblemInfo from '../info_template.js';

export const DepositProfit = new ProblemInfo;
DepositProfit.name = 'Deposit Profit';
DepositProfit.website = 'Code Signal';
DepositProfit.link = 'https://app.codesignal.com/arcade/intro/level-7/8PxjMSncp9ApA4DAb';
DepositProfit.date = 'Sep 3, 2022';
DepositProfit.difficulty = 'Medium';
DepositProfit.recommendedTime = 15;
DepositProfit.timeToComplete = 4;
DepositProfit.complete = true;
DepositProfit.problem = 'Given a initial deposit and annual growth rate, find out how long to reach threshold.';
DepositProfit.topics = null;
DepositProfit.pseudoCode = `
1. create a count
2. create an amount starting at deposit
3. get the percentage from the rate by dividing by 100 and adding 1
4. while loop, check if amount is less than the threshold
   5. if not, increment count
   6. add the rate to the amount
7. return amount
`;

/* Problem & Example:
You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.

Example:
deposit = 100
rate = 20 (20%)
threshold = 170

result = 3
y0 = 100
y1 = 120
y2 = 144
y3 = 172.8

*/

function solution(deposit, rate, threshold) {
   let count = 0;
   let amount = deposit;
   const percent = 1 + (rate / 100);
   while (amount < threshold) {
    count++;
    amount = (amount * percent)
   }
   return count;
}
 