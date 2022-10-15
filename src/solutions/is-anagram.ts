import ProblemInfo from '../components/info-class.js';

export const IsAnagram = new ProblemInfo(
  'Is Anagram', // name
  'Easy', // difficulty
  'Sep 6, 2022', // date
  'Leet Code / Neet Code', // source
  'https://leetcode.com/problems/valid-anagram/', // link
  'Check if two strings are anagram of each other.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  1. Convert both strings to array
  2. sort both arrays
  3. revert to string
  4. check if both strings are equal
    `, // pseudoCode
  function solution(s: string, t: string): boolean {
    const a = s.split('').sort().join('');
    const b = t.split('').sort().join('');
    if (a === b) return true;
    return false;
  } // solution
);
