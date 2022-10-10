import ProblemInfo from '../info-template.js';

export const LineEncoding = new ProblemInfo;
LineEncoding.name = 'Line Encoding';
LineEncoding.website = 'Code Signal';
LineEncoding.link = 'https://app.codesignal.com/arcade/intro/level-11/o2uq6eTuvk7atGadR';
LineEncoding.date = 'Oct 8th, 2022';
LineEncoding.difficulty = 'Medium';
LineEncoding.recommendedTime = 15;
LineEncoding.timeToComplete = 1;
LineEncoding.complete = true;
LineEncoding.problem = 'Check if digit';
LineEncoding.topics = 'Return a string encoded by replacing repeating letters with numbers.';
LineEncoding.usedHelp = false;
LineEncoding.pseudoCode = `
Steps:
1. create variable to hold current letter
2. create count variable
3. create final string variable
4. loop through string
5. check if current letter is equal to variable
6. if yes, increase count
7. if not,
8.    check if count is one, add current to string
9.    if count is greater than one, add count and current to result string
8. reset count and replace current string
`;

/* Problem & Example:
Given a string, return its encoding defined as follows:
First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
for example, "aabbbc" is divided into ["aa", "bbb", "c"]
Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
for example, substring "bbb" is replaced by "3b"
Finally, all the new strings are concatenated together in the same order and a new string is returned.

For s = "aabbbc", the output should be
solution(s) = "2a3bc".
*/

function solution(s) {
  let cur = null;
  let count = 0;
  let res = '';
  for ( let i = 0; i <= s.length; i++) {
    if (cur === null) {
      cur = s[i];
      count++;
    } else if (s[i] === cur) {
      count++;
    } else if (s[i] !== cur) {
      if (Number(count) === 1) {
        res += cur;
      } else {
        res += count + cur;
      }
      count = 1;
      cur = s[i];
    }
  }
  return res;
}
