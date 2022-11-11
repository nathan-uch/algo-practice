import ProblemInfo from '../components/info-class.js';
export const DeleteDigit = new ProblemInfo('Delete Digit', 'Medium', 'Oct 25th, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-11/vpfeqDwGZSzYNm2uX', 'Find the maximal number you can obtain by deleting exactly one digit of a given number.', true, false, '', '', `
  string -> seperate digits
  variable for largest start at 0
  loop through string,
  remove string[i]
  concatenate remaining
  convert to number
  compare with largest
    `, function solution(n) {
    const string = n.toString();
    let largest = 0;
    for (let i = 0; i < string.length; i++) {
        let remaining = '';
        for (let j = 0; j < string.length; j++) {
            if (j !== i) {
                remaining += string[j];
            }
        }
        let current = Number(remaining);
        if (current > largest)
            largest = current;
    }
    return largest;
});
//# sourceMappingURL=delete-digit.js.map