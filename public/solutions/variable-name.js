import ProblemInfo from '../components/info-class.js';
export const VariableName = new ProblemInfo('Variable Name', 'Easy', 'Sep 1, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-6/6Wv4WsrsMJ8Y2Fwno', 'Check if the given string is a correct variable name.', true, false, '', '', `
  1. create alphabet string
  2. create duplicate alpghabet string upper cased
  3. check if first element is number (isNaN)
      4. if yes, return false
  5. loop through string
      6. check if is number by converting to number and using isNaN(), continue
      7. check if equals to _, continue
      8. check if lower case alphabet contains ele, continue
      9. check if cap case alphabet contains ele, continue
      10. if iteration ended, return false
  11. if loop ends, return true
    `, function solution(n) {
    const low = 'abcdefghijklmnopqrstuvwxyz';
    const cap = low.toUpperCase();
    if (!isNaN(parseInt(n[0])))
        return false;
    for (let i = 0; i < n.length; i++) {
        if (!isNaN(parseInt(n[i])))
            continue;
        if (n[i] === '_')
            continue;
        if (cap.includes(n[i]))
            continue;
        if (low.includes(n[i]))
            continue;
        return false;
    }
    return true;
}, function solution2(n) {
    const regex = /^[a-z_]\w*$/;
    if (!n.match(regex))
        return false;
    return true;
});
