import ProblemInfo from '../components/info-class.js';

export const ValidPalindrome = new ProblemInfo(
  'Valid Palindrome', // name
  'Easy', // difficulty
  'Sep 7, 2022', // date
  'Leet Code / Neet Code', // source
  'https://leetcode.com/problems/valid-palindrome/', // link
  'Check if string is palindrome.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  'Two Pointers', // topics
  `
  1. loop over string
  2.      at each letter, lower case it
  3.      check if it is a letter or number
  4.          if yes, add it to array
  5. create a string by joining the array
  6. create another string by reversing then joining array
  7. compare both if equal, return true
  8. if not, return false
  `, // pseudoCode
  function solution(s: string): boolean {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
      const letter = s[i].toLowerCase();
      if (letter.match(/^[a-z0-9]$/)) {
        arr.push(letter);
      }
    }
    let result = arr.join('');
    let reversed = arr.reverse().join('');
    if (reversed === result) return true;
    return false;
  } // solution
);
