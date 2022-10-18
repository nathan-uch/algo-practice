import ProblemInfo from '../components/info-class.js';
export const BuildPalindrome = new ProblemInfo('Build Palindrome', 'Medium', 'Sep 29, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-10/ppZ9zSufpjyzAsSEx', 'Create palindrome from string.', true, false, '', '', `
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
    `, function solution(str) {
    function rev(s) {
        let copy = '';
        for (let i = 0; i < s.length; i++) {
            copy = s[i] + copy;
        }
        if (copy === s)
            return copy;
        return false;
    }
    if (rev(str))
        return str;
    let copy = str;
    copy = copy.split('').reverse().join('');
    let addFront = '';
    let addBack = '';
    for (let i = 0; i < str.length; i++) {
        addFront = addFront + str[i];
        addBack = str[i] + addBack;
        if (addFront + copy === str + addBack) {
            addBack = str + addBack;
            break;
        }
    }
    return addBack;
});
