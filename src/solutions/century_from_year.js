import ProblemInfo from '../info_template.js';

export const CenturyFromYear = new ProblemInfo;
CenturyFromYear.name = 'Century from Year';
CenturyFromYear.website = 'Code Signal';
CenturyFromYear.link = 'https://app.codesignal.com/arcade/intro/level-1/egbueTZRRL5Mm4TXN/solutions';
CenturyFromYear.date = 'Aug 30, 2022';
CenturyFromYear.difficulty = 'Easy';
CenturyFromYear.recommendedTime = 15;
CenturyFromYear.timeToComplete = 12;
CenturyFromYear.complete = true;
CenturyFromYear.problem = 'Convert year to century';

/* Problem & Example:
Convert year to century. The first century spans from the year 1 up to  the year 100, etc.

Example:
year 1905

Equals:
20

-------------------------- Pseudo Code ------------------------
divide year by 100 and round down to get century
check if year divided by 100 is less than century
    if yes, return the century
    if not, return century + 1

*/

function solution(year) {
    let century = Math.floor(year/100);
    if ((year/100) <= century) {
        return Math.floor(century);
    } else {
        return Math.floor(century) + 1;
    }
}