import ProblemInfo from '../components/info-class.js';
export const IsDigit = new ProblemInfo('Is Digit', 'Easy', 'Oct 8th, 2022', 'Code Signal', 'https://leetcode.com/problems/two-sum/', 'Check if digit', true, false, '', '', `
    `, function solution(symbol) {
    if (isNaN(symbol))
        return false;
    return true;
});
