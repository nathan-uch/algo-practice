import ProblemInfo from '../components/info-class.js';

export const ValidTime = new ProblemInfo(
  'Valid Time', // name
  'Easy', // difficulty
  'Oct 26th, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-12/ywMyCTspqGXPWRZx5', // link
  'Check if string is a valid time format.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  or check if string includes semicolon, check if the index is 2 - if not, return false
  creating an array by spliting at the semicolon = 2 numbers
  check if the first number is greater than 0 and less than 23
  check if the second number is greater than 0 and less than 59
  return true
    `, // pseudoCode
  function solution(time: string): boolean {
    if (!time.includes(':') || time.indexOf(':') !== 2) return false;
    const timeArray = time.split(':');
    if (Number(timeArray[0]) < 0 || Number(timeArray[0]) > 23) return false;
    if (Number(timeArray[1]) < 0 || Number(timeArray[1]) > 59) return false;
    return true;
  } // solution
);
