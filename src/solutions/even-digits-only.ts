import ProblemInfo from '../components/info-class.js';

export const EvenDigitsOnly = new ProblemInfo(
  'Even Digits Only', // name
  'Easy', // difficulty
  'Sep 1, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-6/6cmcmszJQr6GQzRwW/solutions', // link
  'Check if every digit in a number is even', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  1. convert to string
  2. loop over each element individually and check if there is remainder from modulous 2
      3. if yes, return false
  4. if no, return true
    `, // pseudoCode
  function solution(n: number): boolean {
    const s: string = n.toString();
    for (let i = 0; i < s.length; i++) {
      if (Number(s[i]) % 2 > 0) return false;
    }
    return true;
  } // solution
);
