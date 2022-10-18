import ProblemInfo from '../components/info-class.js';

export const FindEmailDomain = new ProblemInfo(
  'Fiund Email Domain', // name
  'Medium', // difficulty
  'Sep 27, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-10/TXFLopNcCNbJLQivP', // link
  'Get domain from email', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  1. Loop through string starting from the back
  2. if the current letter is not @,
  3.      add each letter to result
  4. if current letter is @
  5.      break loop
  6. reverse result and return it
    `, // pseudoCode
  function solution(a: string): string {
    let r = [];
    const end = a.length - 1;
    for (let i = end; i > 0; i--) {
      if (a[i] !== '@') {
        r.push(a[i]);
      } else if (a[i] === '@') {
        break;
      }
    }
    const result = r.reverse().join('');
    return result;
  } // solution
);
