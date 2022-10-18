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
  }, // solution
  function solution2(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    let hash: any = {};
    for (let i = 0; i < s.length; i++) {
      if (hash[s[i]] === undefined) {
        hash[s[i]] = 1;
      } else {
        hash[s[i]]++;
      }
    }
    for (let i = 0; i < t.length; i++) {
      if (hash[t[i]] === undefined || hash[t[i]] === 0) return false;
      if (hash[t[i]]) hash[t[i]]--;
      if (hash[t[i]] === 0) delete hash[t[i]];
    }
    return true;
  }
);
