import ProblemInfo from '../components/info-class.js';
export const CenturyFromYear = new ProblemInfo('Century from Year', 'Easy', 'Aug 30, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-1/egbueTZRRL5Mm4TXN/solutions', 'Convert year to century', true, false, '', '', `
    1. divide year by 100 and round down to get century
    2. check if year divided by 100 is less than century
        3. if yes, return the century
        4. if not, return century + 1
  `, function solution(year) {
    let century = Math.floor(year / 100);
    if (year / 100 <= century) {
        return Math.floor(century);
    }
    else {
        return Math.floor(century) + 1;
    }
});
