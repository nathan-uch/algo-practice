import ProblemInfo from '../components/info-class.js';

export const LongestWord = new ProblemInfo(
  'Longest Word', // name
  'Easy', // difficulty
  'Oct 25th, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-12/s9qvXv4yTaWg8g4ma', // link
  'Find the longest word in a given string.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
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
    `, // pseudoCode
  function solution(text: string): string {
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
      } else {
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
  } // solution
);
