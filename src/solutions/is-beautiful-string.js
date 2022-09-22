import ProblemInfo from '../info-template.js';

export const IsBeautifulString = new ProblemInfo;
IsBeautifulString.name = 'Is Beautiful String';
IsBeautifulString.website = 'Code Signal';
IsBeautifulString.link = 'https://app.codesignal.com/arcade/intro/level-10/PHSQhLEw3K2CmhhXE';
IsBeautifulString.date = 'Sep 22, 2022';
IsBeautifulString.difficulty = 'Medium';
IsBeautifulString.recommendedTime = 25;
IsBeautifulString.timeToComplete = 30;
IsBeautifulString.complete = true;
IsBeautifulString.problem = 'Check if letters in string appear no more than previous alphabet letter.';
IsBeautifulString.topics = '';
IsBeautifulString.usedHelp = false;
IsBeautifulString.pseudoCode = `
1. create alphabet array [for getting previous letter]
2. create result variable at true
3. sort the input string
4. create count object
5. loop over string and add letters as keys in obejct and count as value
6. get index of current letter
7. get previous letter from alphabet using alphabet array and index
8. check if current letter is 'a', continue if yes
9. if not, check if the count of current letter is larger than count of previous letter in count object
   or if count of previous letter in object is undefined
10. if yes, change result to false
11. if result is false, exit loop
12. return result
`;

/* Problem & Example:
A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc. Note that letter a has no previous letter.

For inputString = "bbbaacdafe", the output should be solution(inputString) = true.
This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 f (and 0 of every other letter), so since there aren't any letters that appear more frequently than the previous letter, this string qualifies as beautiful.

For inputString = "aabbb", the output should be solution(inputString) = false.
Since there are more bs than as, this string is not beautiful.

For inputString = "bbc", the output should be solution(inputString) = false.
Although there are more bs than cs, this string is not beautiful because there are no as, so therefore there are more bs than as.
*/

function solution(string) {
  const alpha = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let result = true;
  const sorted = string.split('').sort().join('');
  let count = {};
  for (let i = 0; i < sorted.length; i++) {
    let l = sorted[i];
    if (i === 0) {
      count[l] = 1;
    } else {
      if (count[l] === undefined) {
        count[l] = 1;
      } else {
        count[l]++;
      }
    }

    const index = alpha.indexOf(l) - 1;
    const prevLet = alpha[index];
    if (l === 'a') {
      continue
    } else if (count[l] > count[prevLet] || count[prevLet] === undefined) {
      result = false;
    }
    if (result === false) break
  }

  return result
}
