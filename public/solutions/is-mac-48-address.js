import ProblemInfo from '../components/info-class.js';
export const IsMAC48Address = new ProblemInfo('Is MAC48 Address', 'Medium', 'Oct 6th, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-10/HJ2thsvjL25iCvvdm', 'Check is string is IEEE 802 format for printing MAC-48 addresses.', true, false, '', '', `
    1. check length of string, if shorter or greater than MAC48 return false
    2. declare array with all possible chars
    3. create variable for dashes index starting at 2
    4. loop over string
    5. check if index is equal to dash index,
      6. if yes, check if the string is a dash
        7. if not, return false
        8. if yes, increment dash index to next dash
      9. if not dash index, check if current character is included in allowed chars
        10. if not, return false
    11. if loop ends, return true
    `, function solution(str) {
    if (str.length >= 18 || str.length <= 16)
        return false;
    const c = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
    ];
    let dash = 2;
    for (let i = 0; i < str.length; i++) {
        if (i === dash) {
            if (str[i] !== '-') {
                return false;
            }
            dash += 3;
        }
        else {
            if (!c.includes(str[i])) {
                return false;
            }
        }
    }
    return true;
});
