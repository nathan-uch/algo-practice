import ProblemInfo from '../components/info-class.js';

export const DifferentSymbolsNaive = new ProblemInfo(
  'Different Symbols Naive', // name
  'Easy', // difficulty
  'Sep 11, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-8/8N7p3MqzGQg5vFJfZ/solutions', // link
  'Given a string, find the number of different characters in it.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  1. create variable for count and array for holding letters
  2. loop through string
  3.      if the array doesn't contain the current char
  4.          push to array
  5.          increment count
  6. at end of loop, return count
  `, // pseudoCode
  function solution(s: string): number {
    let count = 0;
    const preivous: string[] = [];
    for (let i = 0; i < s.length; i++) {
      if (!preivous.includes(s[i])) {
        preivous.push(s[i]);
        count++;
      }
    }
    return count;
  } // solution
);
