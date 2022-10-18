import ProblemInfo from '../components/info-class.js';
export const AlphabeticShift = new ProblemInfo('Alphabetic Shift', 'Easy', 'Sep 2, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-6/PWLT8GBrv9xXy4Dui/solutions', 'Replace each letter of a string with the next letter in alphabet.', true, false, '', '', `
    1. create an array with all letters in the alphabet in order
    2. create empty string variable
    3. loop through the input string and
        4. find the index from the array (index of)
        5. check if index is last letter of alphabet, if yes, return give index -1
        6. add next letter to empty string at index + 1
    7. return string
    `, function solution(inputString) {
    const alpha = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];
    let result = '';
    for (let i = 0; i < inputString.length; i++) {
        let index = alpha.indexOf(inputString[i]);
        if (index === 25)
            index = -1;
        result += alpha[index + 1];
    }
    return result;
});
