import ProblemInfo from '../components/info-class.js';
export const DigitDegree = new ProblemInfo('Digit Degree', 'Medium', 'Sep 16, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-9/hoLtYWbjdrD2PF6yo', "From a number's sum of digits, find the single digit number.", true, false, '', 'Recursion', `
  Steps needed:
  - Split to single digits
  - Add digits to check if single
  - could use recursion until

  1. Make a string from the number
  2. loop over the string adding them all together
  3.    check if result is a single digit
  4.    if not, repeat process
  5.    if yes, return sum
    `, function solution(n) {
    const getSum = (num, count) => {
        let str = num.toString();
        if (str.length === 1) {
            return count;
        }
        else {
            count++;
            let sum = 0;
            for (let i = 0; i < str.length; i++) {
                sum += Number(str[i]);
            }
            return getSum(sum, count);
        }
    };
    return getSum(n, 0);
});
//# sourceMappingURL=digit-degree.js.map