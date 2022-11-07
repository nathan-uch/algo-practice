import ProblemInfo from '../components/info-class.js';

export const MessageFromBinaryCode = new ProblemInfo(
  'Message from Binary Code', // name
  'Medium', // difficulty
  'Nov 6th, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-12/sCpwzJCyBy2tDSxKW', // link
  'Convert binary code to string', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  create an array to hold every 8 binary 0-1s
  create variable to hold current binary
  loop over original string
    check if 8 digits
      if yes, add to array and reset current
    add to current

  create function for getting the number to convert with fromCharCode()
    create a sum (binary sum)
    get total length of binary
    loop over binary
      check if the current digit is 1
        if yes, get total minus current index subtracted by 1
                get the result by using 2 to the power of the total
                add to sum
    return sum at end of loop

    map over array of binaries, using the function on each binary
    create result string
    at each converted binary, use fromCharCode() adding to result string
    return result string
    `, // pseudoCode
  function solution(code: string): string {
    let array = [];
    let cur = '';
    for (let i = 0; i <= code.length; i++) {
      if (i !== 0 && i % 7 === 0) {
        array.push(cur);
        cur = '';
      }
      cur += code[i];
    }

    const getNum = (bin: string): number => {
      let sum = 0;
      const total = bin.length;
      for (let i = 0; i < bin.length; i++) {
        if (Number(bin[i]) === 1) {
          const power = total - (i - 1);
          const res = Math.pow(2, power);
          sum += res;
        }
      }
      return sum;
    };

    const str = array.map((b) => getNum(b));
    let result = '';
    str.forEach((n) => (result += String.fromCharCode(n)));
    return result;
  } // solution
);
