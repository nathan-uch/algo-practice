import ProblemInfo from '../components/info-class.js';
export const FirstDigit = new ProblemInfo('First Digit', 'Easy', 'Sep 10, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-8/rRGGbTtwZe2mA8Wov', 'First leftmost digit from a string', true, false, '', '', `
  1. Loop through string
  2. check if is a digit
  3. return digit
    `, function solution(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            continue;
        }
        else if (!isNaN(Number(s[i]))) {
            result = s[i];
            break;
        }
    }
    return result.toString();
});
