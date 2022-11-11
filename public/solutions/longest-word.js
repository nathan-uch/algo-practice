import ProblemInfo from '../components/info-class.js';
export const LongestWord = new ProblemInfo('Longest Word', 'Easy', 'Oct 25th, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-12/s9qvXv4yTaWg8g4ma', 'Find the longest word in a given string.', true, false, '', '', `
  declare a variable to hold longest word
  create array with letters
  declare variable to hold current word

    looping through the string
        at each character check if it's a letter
          if it is, add it to current word
          check if current word is greater than longest word, if yes replace it
        if not, compare its length to longest word
            if length greater than longest word, replace longest word
            reset current word
    return the longest word
    `, function solution(text) {
    let longestWord = '';
    const letters = [
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
    let currentWord = '';
    for (let i = 0; i < text.length; i++) {
        if (letters.includes(text[i].toLowerCase())) {
            currentWord += text[i];
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
        }
        else {
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
            currentWord = '';
        }
        if (i === text.length - 1 && longestWord === '') {
            return text;
        }
    }
    return longestWord;
});
//# sourceMappingURL=longest-word.js.map