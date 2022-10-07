import ProblemInfo from '../info-template.js';

export const IsMAC48Address = new ProblemInfo;
IsMAC48Address.name = 'Is MAC48 Address';
IsMAC48Address.website = 'Code Signal';
IsMAC48Address.link = 'https://app.codesignal.com/arcade/intro/level-10/HJ2thsvjL25iCvvdm';
IsMAC48Address.date = 'Oct 6th, 2022';
IsMAC48Address.difficulty = 'Medium';
IsMAC48Address.recommendedTime = 15;
IsMAC48Address.timeToComplete = 10;
IsMAC48Address.complete = true;
IsMAC48Address.problem = 'Check is string is IEEE 802 format for printing MAC-48 addresses.';
IsMAC48Address.topics = '';
IsMAC48Address.usedHelp = false;
IsMAC48Address.pseudoCode = `
Steps:

`;

/* Problem & Example:

*/
function solution(str) {
    if (str.length >= 18 || str.length <= 16) return false
    const c = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B','C','D','E','F'];
    let dash = 2;
    for (let i = 0; i < str.length; i++) {
      if (i === dash) {
        if (str[i] !== '-') {
          return false;
        }
        dash += 3;
      } else {
        if (!c.includes(str[i])) {
            return false
        }
      }
    }
    return true;
}
