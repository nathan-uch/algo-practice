import ProblemInfo from '../components/info-class.js';

export const GroupAnagrams = new ProblemInfo(
  'Group Anagrams', // name
  'Medium', // difficulty
  'Nov 11th, 2022', // date
  'Leet Code / Neet Code', // source
  'https://leetcode.com/problems/group-anagrams/', // link
  'Group anagrams from array of strings.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  'Arrays and Hashing', // topics
  `
  create a hash to store anagram's indexes from original array
  create empty array

  loop through array
    sort current string
    check if array contains sorted string
      no - add to empty array
      add index to hash

  create result array
  loop through each hash object (array of indexes)
    create array for current anagram
    at each index, add to result array of anagram
    add to result array

  return result array
  `, // pseudoCode
  function solution(str: string[]): string[][] {
    const indexes: any = {};
    const sorted: string[] = [];
    for (let i = 0; i < str.length; i++) {
      let cur = str[i].split('').sort().join('');
      if (!sorted.includes(cur)) {
        sorted.push(cur);
        indexes[cur] = [];
      }
      indexes[cur].push(i);
    }
    const res = [];
    for (const letter in indexes) {
      const curAnagrams = indexes[letter].map((ind: string | number) => {
        return str[Number(ind)];
      });
      res.push(curAnagrams);
    }
    return res;
  } // solution
);
