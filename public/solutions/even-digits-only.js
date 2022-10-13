import ProblemInfo from '../components/info-class.js';
export const EvenDigitsOnly = new ProblemInfo('Even Digits Only', 'Easy', 'Sep 1, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-6/6cmcmszJQr6GQzRwW/solutions', 'Check if every digit in a number is even', true, false, '', '', `
  1. convert to string
  2. loop over each element individually and check if there is remainder from modulous 2
      3. if yes, return false
  4. if no, return true
    `, function solution(n) {
    const s = n.toString();
    for (let i = 0; i < s.length; i++) {
        if (Number(s[i]) % 2 > 0)
            return false;
    }
    return true;
});
