import ProblemInfo from '../components/info-class.js';

export const PhoneCall = new ProblemInfo(
  'Phone Call', // name
  'Easy', // difficulty
  'Dec 1st, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/code-arcade/intro-gates/mZAucMXhNMmT7JWta/solutions', // link
  'How many minutes are you able to talk on the phone depending on min rates.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  create a loop for counting minutes (i) without condition
  check if first min and money is enough,
    subtract rate from total
  else if 2nd to 10th min and money is enough,
    subtract rate from total
  else if 1th + min and money is enough,
    subtract rate from total
  all else,
    return mins - 1
  `, // pseudoCode
  function solution(
    min1: number,
    min2_10: number,
    min11: number,
    s: number
  ): number {
    for (let i = 1; ; i++) {
      if (i === 1 && s - min1 >= 0) {
        s = s - min1;
      } else if (i > 1 && i < 11 && s - min2_10 >= 0) {
        s = s - min2_10;
      } else if (i >= 11 && s - min11 >= 0) {
        s = s - min11;
      } else {
        return i - 1;
      }
    }
  } // solution
);
