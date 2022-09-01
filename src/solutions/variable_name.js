import ProblemInfo from '../info_template.js';

export const VariableName = new ProblemInfo;
VariableName.name = 'Variable Name';
VariableName.website = 'Code Signal';
VariableName.link = 'https://app.codesignal.com/arcade/intro/level-6/6Wv4WsrsMJ8Y2Fwno';
VariableName.date = 'Sep 1, 2022';
VariableName.difficulty = 'Easy';
VariableName.recommendedTime = 10;
VariableName.timeToComplete = 10;
VariableName.complete = true;
VariableName.problem = 'Check if the given string is a correct variable name.';

/* Problem & Example:
Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.
Check if the given string is a correct variable name.

Example:
name1 = "var_1__Int"
name2 = "qq-q"
name3 = "2w2"

Equals:
name1 = true
name2 = false
name3 = false

-------------------------- Pseudo Code ------------------------
create alphabet string
create duplicate alpghabet string upper cased

check if first element is number (isNaN)
    if yes, return false

loop through string
    check if is number by converting to number and using isNaN(), continue
    check if equals to _, continue
    check if lower case alphabet contains ele, continue
    check if cap case alphabet contains ele, continue
    if iteration ended, return false

if loop ends, return true
return true

*/

function solution(n) {
    const low = 'abcdefghijklmnopqrstuvwxyz';
    const cap = low.toUpperCase();
    if (!isNaN(n[0])) return false
    debugger;
    for (let i = 0; i < n.length; i++) {
        if (!isNaN(parseInt(n[i]))) continue;
        if (n[i] === '_') continue;
        if (cap.includes(n[i])) continue;
        if (low.includes(n[i])) continue;
        return false;
    }
    return true;
}
