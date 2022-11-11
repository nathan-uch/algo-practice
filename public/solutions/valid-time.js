import ProblemInfo from '../components/info-class.js';
export const ValidTime = new ProblemInfo('Valid Time', 'Easy', 'Oct 26th, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-12/ywMyCTspqGXPWRZx5', 'Check if string is a valid time format.', true, false, '', '', `
  or check if string includes semicolon, check if the index is 2 - if not, return false
  creating an array by spliting at the semicolon = 2 numbers
  check if the first number is greater than 0 and less than 23
  check if the second number is greater than 0 and less than 59
  return true
    `, function solution(time) {
    if (!time.includes(':') || time.indexOf(':') !== 2)
        return false;
    const timeArray = time.split(':');
    if (Number(timeArray[0]) < 0 || Number(timeArray[0]) > 23)
        return false;
    if (Number(timeArray[1]) < 0 || Number(timeArray[1]) > 59)
        return false;
    return true;
});
//# sourceMappingURL=valid-time.js.map