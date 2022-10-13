import ProblemInfo from '../components/info-class.js';

export const VariableName = new ProblemInfo(
  'Variable Name', // name
  'Easy', // difficulty
  'Sep 1, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-6/6Wv4WsrsMJ8Y2Fwno', // link
  'Check if the given string is a correct variable name.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  1. create alphabet string
  2. create duplicate alpghabet string upper cased
  3. check if first element is number (isNaN)
      4. if yes, return false
  5. loop through string
      6. check if is number by converting to number and using isNaN(), continue
      7. check if equals to _, continue
      8. check if lower case alphabet contains ele, continue
      9. check if cap case alphabet contains ele, continue
      10. if iteration ended, return false
  11. if loop ends, return true
    `, // pseudoCode
  function solution(n: string): boolean {
    const low = 'abcdefghijklmnopqrstuvwxyz';
    const cap = low.toUpperCase();
    if (!isNaN(parseInt(n[0]))) return false;
    for (let i = 0; i < n.length; i++) {
      if (!isNaN(parseInt(n[i]))) continue;
      if (n[i] === '_') continue;
      if (cap.includes(n[i])) continue;
      if (low.includes(n[i])) continue;
      return false;
    }
    return true;
  }, // solution
  function solution2(n: string): boolean {
    const regex = /^[a-z_]\w*$/;
    if (!n.match(regex)) return false;
    return true;
  } // solution2, optional
);

/*
Regex:
^ matches the beginning of the input
[A-Za-z] or [^a-z] for alphabet
[0-9] for numbers
[_] for underscore
+ matches 1 or more repetitions of the preceding symbol
$ matches the end of the input
\w matches any letter, number or underscore
*/
