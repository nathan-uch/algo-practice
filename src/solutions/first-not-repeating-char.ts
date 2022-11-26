import ProblemInfo from '../components/info-class.js';

export const FirstNotRepeatingChar = new ProblemInfo(
  'First Not Repeating Character', // name
  'Easy', // difficulty
  'Nov 25th, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/interview-practice/question/uX5iLwhc6L5ckSyNC', // link
  'Find first non-repeating character.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  'Array and hashing', // topics
  `
  create variable to hold result
  create hash to hold already repeated letters
  create variable to hold current letter
  create one pointer for current letter
  create second pointer for checking repeated in original string
  check if string is only one letter, if yes return string

  while second pointer is less than original string length
    replace current with string at first pointer
    check if current is in hash or equals to letter at second pointer
      if yes, increment first pointer and make second pointer first pointer + 1
        if not in hash, add to hash
        continue next iteration of while loop
      else,
        keep incrementing second pointer

    if loop ends, check if result is empty string
      if yes, replace result with underscore
    return result
  `, // pseudoCode
  function solution(s: string): string {
    let res = '_';
    const rep: any = {};
    let cur = null;
    let c = 0;
    let p = 1;
    if (s.length === 1) return s;
    while (p <= s.length - 1) {
      cur = s[c];
      if (rep[cur] !== undefined || cur === s[p]) {
        if (rep[cur] === undefined) rep[cur] = true;
        c++;
        p = c + 1;
        res = '_';
        continue;
      } else {
        p++;
        res = cur;
        continue;
      }
    }
    return res;
  } // solution
);
