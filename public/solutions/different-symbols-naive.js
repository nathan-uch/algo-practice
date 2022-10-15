import ProblemInfo from '../components/info-class.js';
export const DifferentSymbolsNaive = new ProblemInfo('Different Symbols Naive', 'Easy', 'Sep 11, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-8/8N7p3MqzGQg5vFJfZ/solutions', 'Given a string, find the number of different characters in it.', true, false, '', '', `
  1. create variable for count and array for holding letters
  2. loop through string
  3.      if the array doesn't contain the current char
  4.          push to array
  5.          increment count
  6. at end of loop, return count
  `, function solution(s) {
    let count = 0;
    const preivous = [];
    for (let i = 0; i < s.length; i++) {
        if (!preivous.includes(s[i])) {
            preivous.push(s[i]);
            count++;
        }
    }
    return count;
});
