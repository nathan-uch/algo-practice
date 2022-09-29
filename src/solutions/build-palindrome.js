import ProblemInfo from '../info-template.js';

export const BuildPalindrome = new ProblemInfo;
BuildPalindrome.name = 'Build Palindrome';
BuildPalindrome.website = 'Code Signal';
BuildPalindrome.link = 'https://app.codesignal.com/arcade/intro/level-10/ppZ9zSufpjyzAsSEx';
BuildPalindrome.date = 'Sep 29, 2022';
BuildPalindrome.difficulty = 'Medium';
BuildPalindrome.recommendedTime = 20;
BuildPalindrome.timeToComplete = 30;
BuildPalindrome.complete = true;
BuildPalindrome.problem = 'Create palindrome from string.';
BuildPalindrome.topics = '';
BuildPalindrome.usedHelp = false;
BuildPalindrome.pseudoCode = `
Steps needed:
1. check if current str reversed is already palindrome, if yes return string
2. create a copy that is the string reversed
3. create string that will be added to front and another added to back
4. loop through string
5.    add current letter to front of addfront var
6.    add current letter to back of addback letter
7.    check if addfront plus rev copy equals to string plus addback
8.      if yes, make addback variable the whole string and addedback
9.      exit loop
10. if loop ends or exit, return addback var
`;

/* Problem & Example:
Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

For st = "abcdc", the output should be
solution(st) = "abcdcba".
*/

function solution(str) {
  if(rev(str)) return str;
  let copy = str;
  copy = copy.split('').reverse().join('');
  let addFront = '';
  let addBack = '';
  for (let i = 0; i < str.length; i++) {
    addFront = addFront + str[i];
    addBack = str[i] + addBack
    if ((addFront + copy) === (str + addBack)) {
      addBack = str + addBack;
      break;
    }
  }
  return addBack;
};

function rev(str) {
  let copy = '';
  for(let i = 0; i < str.length; i++) {
    copy = str[i] + copy;
  }
  if (copy === str) return copy;
  return false;
}
