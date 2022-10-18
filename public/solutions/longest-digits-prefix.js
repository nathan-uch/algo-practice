import ProblemInfo from '../components/info-class.js';
export const LongestDigitsPrefix = new ProblemInfo('Longest Digits Prefix', 'Easy', 'Sep 15, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-9/AACpNbZANCkhHWNs3', 'Retrieve longest prefix containing only digits.', true, false, '', '', `
  1. declare variable for result
  2. loop over string
  3.      if current number is number add to result
  4.      if not end loop, return result
    `, function solution(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i]) && s[i] !== ' ') {
            result += s[i];
        }
        else {
            break;
        }
    }
    return result;
});
