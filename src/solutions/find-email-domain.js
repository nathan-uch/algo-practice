import ProblemInfo from '../info-template.js';

export const FindEmailDomain = new ProblemInfo;
FindEmailDomain.name = 'Find Email Domain';
FindEmailDomain.website = 'Code Signal';
FindEmailDomain.link = 'https://app.codesignal.com/arcade/intro/level-10/TXFLopNcCNbJLQivP';
FindEmailDomain.date = 'Sep 27, 2022';
FindEmailDomain.difficulty = 'Medium';
FindEmailDomain.recommendedTime = 15;
FindEmailDomain.timeToComplete = 5;
FindEmailDomain.complete = false;
FindEmailDomain.problem = 'Get email domain';
FindEmailDomain.topics = '';
FindEmailDomain.usedHelp = false;
FindEmailDomain.pseudoCode = `
1. Loop through string starting from the back
2. if the current letter is not @,
3.      add each letter to result
4. if current letter is @
5.      break loop
6. reverse result and return it
`;

/* Problem & Example:
An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").
The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters. Here you can look at several examples of correct and incorrect email addresses.
Given a valid email address, find its domain part.

https://en.wikipedia.org/wiki/Email_address#Examples

For address = "prettyandsimple@example.com", the output should be
solution(address) = "example.com";

For address = "fully-qualified-domain@codesignal.com", the output should be
solution(address) = "codesignal.com".

*/

function solution(a) {
  let r = [];
  const end = a.length - 1;
  for (let i = end; i > 0; i--) {
    if (a[i] !== '@') {
      r.push(a[i]);
    } else if (a[i] === '@') {
      break;
    }
  }
  const result = r.reverse().join('');
  return result;
}
