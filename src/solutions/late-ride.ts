import ProblemInfo from '../components/info-class.js';

export const LateRide = new ProblemInfo(
  'Late Ride', // name
  'Easy', // difficulty
  'Nov 18th, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/code-arcade/intro-gates/aiKck9MwwAKyF8D4L', // link
  'Find sum of digits of time passed.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  get total mins divided by 60 convert to string
  loop over string and add numbers before period to hours
  add numbers after period to minutes
  convert hours to 24h format
  get minutes from fraction(decimal) of hours
  concat both to make time
  loop over time adding each digit
  `, // pseudoCode
  function solution(n: number): number {
    let origin = (n / 60).toString();
    let hr: string | number = '';
    let tempMin: string | number = '';
    let period = false;
    for (let i = 0; i < origin.length; i++) {
      if (origin[i] === '.') {
        period = true;
        tempMin += '0.';
        while (Number(hr) > 24) {
          hr = Number(hr) - 24;
        }
      } else if (!period) {
        hr += origin[i];
      } else {
        tempMin += origin[i];
      }
    }
    const min = parseInt(
      (Number(((Number(tempMin) * 60) / 100).toFixed(2)) * 100).toString()
    );
    const time = hr.toString() + ':' + min.toString();
    let sum = 0;
    for (let i = 0; i < time.length; i++) {
      if (time[i] !== undefined && time[i] !== ':') {
        sum += Number(time[i]);
      }
    }
    return sum;
  } // solution
);
