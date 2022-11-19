import ProblemInfo from '../components/info-class.js';

export const FirstDuplicate = new ProblemInfo(
  'First Duplicate', // name
  'Easy', // difficulty
  'Nov 19th, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/interview-practice/question/pMvymcahZ8dY4g75q/description', // link
  'Find first repeating values in array', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  'Array and hashing', // topics
  `
  create hash to keep track of repeating values
  create result starting at -1
  loop over number array
  check if current value is in hash,
    if not, add to hash
    if yes, replace result with current value and exit loop
  return result
  `, // pseudoCode
  function solution(a: number[]): number {
    const hash: any = {};
    let res = -1;
    for (let i = 0; i < a.length; i++) {
      const cur = a[i];
      if (hash[cur] === undefined) {
        hash[cur] = i;
      } else {
        res = cur;
        break;
      }
    }
    return res;
  } // solution
);
