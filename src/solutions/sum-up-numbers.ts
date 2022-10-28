import ProblemInfo from '../components/info-class.js';

export const SumUpNumbers = new ProblemInfo(
  'Sum Up Numbers', // name
  'Medium', // difficulty
  'Oct 28th, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-12/YqZwMJguZBY7Hz84T', // link
  '', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  create a variable to hold count - initial 0
  create a variable to hold current number - initial ''
  create variable to toggle consecutive numbers - initial false
  loop through string
  check if current char is not a number (try to convert to number - NaN)
    (yes) if number, add string to current number
      switch toggle to true
    (no) if not
      check if toggle is true
      (yes) convert current num to number
            add to count
            reset the current number
            turn off toggle

    check if end of loop and if there is current number,
      (yes) convert to number and add to count
    return count

    `, // pseudoCode
  function solution(inputString: string): number {
    let count = 0;
    let current = '';
    let isConsecutive = false;

    for (let i = 0; i < inputString.length; i++) {
      const char = Number(inputString[i]);
      if (!isNaN(char) && inputString[i] !== ' ') {
        current += inputString[i];
        isConsecutive = true;
      } else {
        if (isConsecutive) {
          count += Number(current);
          current = '';
          isConsecutive = false;
        }
      }
      if (i === inputString.length - 1 && isConsecutive) {
        count += Number(current);
      }
    }
    return count;
  } // solution
);
