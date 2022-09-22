import ProblemInfo from '../info-template.js';

export const IsAnagram = new ProblemInfo;
IsAnagram.name = 'Is Anagram';
IsAnagram.website = 'Leet Code / Neet Code';
IsAnagram.link = 'https://leetcode.com/problems/valid-anagram/';
IsAnagram.date = 'Sep 6, 2022';
IsAnagram.difficulty = 'Easy';
IsAnagram.recommendedTime = 10;
IsAnagram.timeToComplete = 2;
IsAnagram.complete = true;
IsAnagram.problem = 'Check if two strings are anagram of each other.';
IsAnagram.topics = '';
IsAnagram.usedHelp = false;
IsAnagram.pseudoCode = `
1. Convert both strings to array
2. sort both arrays
3. revert to string
4. check if both strings are equal
`;

/* Problem & Example:
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

Example:
Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false
*/

function solution(s, t) {
    const a = s.split('').sort().join('');
    const b = t.split('').sort().join('');
    if (a === b) return true;
    return false;
}
