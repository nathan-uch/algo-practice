import ProblemInfo from '../components/info-class.js';

export const GrowingPlant = new ProblemInfo(
  'Growing Plant', // name
  'Easy', // difficulty
  'Sep 13, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-9/xHvruDnQCx7mYom3T', // link
  'Find days plant reaches desired height.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  1. declare days and current height variable
  2. loop starting i at 1 for first day, no condition
  3.      change the days to i
  4.      add up speed to curheight
  5.      check if reached desired height
  6.          if yes exit loop
  7.      subtract down speed from cur height
  8.      check if reached desired height
  9.          if yes, exit loop
  10. return days
    `, // pseudoCode
  function solution(
    upSpeed: number,
    downSpeed: number,
    desiredHeight: number
  ): number {
    let days = 0;
    let curHeight = 0;
    for (let i = 1; ; i++) {
      days = i;
      curHeight += upSpeed;
      if (curHeight >= desiredHeight) break;
      curHeight -= downSpeed;
      if (curHeight >= desiredHeight) break;
    }
    return days;
  } // solution
);
