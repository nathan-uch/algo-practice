import ProblemInfo from '../info_template.js';

export const ValidPalindrome = new ProblemInfo;
ValidPalindrome.name = 'Valid Palindrome';
ValidPalindrome.website = 'Leet Code / Neet Code';
ValidPalindrome.link = 'https://leetcode.com/problems/valid-palindrome/';
ValidPalindrome.date = 'Sep 7, 2022';
ValidPalindrome.difficulty = 'Easy';
ValidPalindrome.recommendedTime = 10;
ValidPalindrome.timeToComplete = 10;
ValidPalindrome.complete = true;
ValidPalindrome.problem = 'Check if string is palindrome.';
ValidPalindrome.topics = 'Two Pointers';
ValidPalindrome.usedHelp = false;
ValidPalindrome.pseudoCode = `
1. loop over string 
2.      at each letter, lower case it
3.      check if it is a letter or number
4.          if yes, add it to array
5. create a string by joining the array
6. create another string by reversing then joining array
7. compare both if equal, return true
8. if not, return false
`;

/* Problem & Example:
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

var isPalindrome = function(s) {
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
    return false
};

// using left pointer and right pointer (without creating string)
