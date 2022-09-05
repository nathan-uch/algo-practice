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
VariableName.topics = null;
VariableName.pseudoCode = `
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
`;

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

/* 
Learned Regex:
^ matches the beginning of the input
[A-Za-z] or [^a-z] for alphabet
[0-9] for numbers
[_] for underscore
+ matches 1 or more repetitions of the preceding symbol
$ matches the end of the input
\w matches any letter, number or underscore
*/

function regexSolution(n) {
    const regex = /^[a-z_]\w*$/
    if (!n.match(regex)) return false;
    return true
}