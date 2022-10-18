import ProblemInfo from '../components/info-class.js';
export const IsAnagram = new ProblemInfo('Is Anagram', 'Easy', 'Sep 6, 2022', 'Leet Code / Neet Code', 'https://leetcode.com/problems/valid-anagram/', 'Check if two strings are anagram of each other.', true, false, '', '', `
  1. Convert both strings to array
  2. sort both arrays
  3. revert to string
  4. check if both strings are equal
    `, function solution(s, t) {
    const a = s.split('').sort().join('');
    const b = t.split('').sort().join('');
    if (a === b)
        return true;
    return false;
});
