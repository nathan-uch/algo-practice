import ProblemInfo from '../components/info-class.js';

export const StringsRearrangement = new ProblemInfo(
  'Strings Rearrangement', // name
  'Medium', // difficulty
  'Sep 5, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-7/PTWhv2oWqd6p4AHB9', // link
  'Check if 2 consecutive strings can be different by only 1 char in an array.', // summary
  true, // completed
  true, // usedHelp
  '#', // helpSource
  'Permutation (DFS) & Recursion', // topics
  `
    Function 1: Recursion
    1. loop over array
    2.    create variable for finding remaining string array (calls function 2)
    3.    check if the remaining is empty
    4.        if yes, return true
    5. if loop ends, return false

    Function 2: Find Next
    1. check if the array is empty, if yes, return empty array
    2. loop over array
    3.    check if the current string and current string in loop differs by one
    4.      if yes, get remaining string array by finding next with current string and slicing string array
                slice the array at starting at next index
                and concatante with beginning of array up to current string
    5.      check if the remaining string array is empty, if yes return the string array
    6. if loop ends, return the string array

    Function 3: Differs by one
    1. create variable to check amount of differing chars
    2. loop over one of the strings
    3.    check if chars are equal
    4.    if yes, increment variable
    5.    if variable surpasses 1, end loop
    6. return boolean if mismatches equals to 1
    `, // pseudoCode
  function solution(arr: string[]): boolean {
    function recur(a: string[]): boolean {
      for (let i = 0; i < a.length; i++) {
        let remaining = findNext(a[i], a);
        if (remaining.length === 0) return true;
      }
      return false;
    }

    function findNext(current: string, a: string[]): string[] {
      if (a.length === 0) return a;
      for (let i = 0; i < a.length; i++) {
        if (differsByOneChar(current, a[i])) {
          let remaining = findNext(a[i], a.slice(0, i).concat(a.slice(i + 1)));
          if (remaining.length === 0) return remaining;
        }
      }
      return a;
    }

    function differsByOneChar(s1: string, s2: string): boolean {
      let mismatches = 0;
      for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) mismatches++;
        if (mismatches > 1) break;
      }
      return mismatches === 1;
    }

    return recur(arr);
  } // solution
);
