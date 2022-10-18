import ProblemInfo from '../components/info-class.js';
export const AbsoluteValuesSumMinimization = new ProblemInfo('Absolute Values Sum Minimization', 'Medium', 'Sep 4, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-7/ZFnQkq9RmMiyE6qtq', 'From array, find value which is closest to all other values.', true, false, '', '', `
  1. declare new variable to hold the first num in array: a[0] as result
  2. declare new variable for last num value
  3. declare new variable as last abs value
  4. loop through array
      5. declare new variable as current abs value
      6. loop through array and get abs value by adding it to value at each iteration
      7. if this is the first num, save the abs value to variable (prev value) for comparison
      8. if current abs value equals last abs value
          9. compare the original array values and save smaller value as result
      10. else, compare current abs value to last abs value,
          11. if current abs value is less than last abs value,
              12. current abs value equals last abs value
              13. result equals to original value in array
  14. return result
    `, function solution(a) {
    let result = a[0];
    let lastNumValue = null;
    let lastAbsValue = 0;
    for (let i = 0; i < a.length; i++) {
        let curAbsValue = 0;
        for (let n = 0; n < a.length; n++) {
            curAbsValue += Math.abs(a[n] - a[i]);
        }
        if (i === 0) {
            lastAbsValue = curAbsValue;
            lastNumValue = a[i];
        }
        else if (curAbsValue === lastAbsValue) {
            if (lastNumValue > a[i])
                lastNumValue === a[i];
        }
        else if (curAbsValue < lastAbsValue) {
            lastAbsValue = curAbsValue;
            lastNumValue = a[i];
        }
        result = lastNumValue;
    }
    return result;
});
