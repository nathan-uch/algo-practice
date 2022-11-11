import ProblemInfo from '../components/info-class.js';
export const IsBeautifulString = new ProblemInfo('Is Beautiful String', 'Medium', 'Sep 22, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-10/PHSQhLEw3K2CmhhXE', 'Check if letters in string appear no more than previous alphabet letter.', true, false, '', '', `
  1. create alphabet array [for getting previous letter]
  2. create result variable at true
  3. sort the input string
  4. create count object
  5. loop over string and add letters as keys in obejct and count as value
  6. get index of current letter
  7. get previous letter from alphabet using alphabet array and index
  8. check if current letter is 'a', continue if yes
  9. if not, check if the count of current letter is larger than count of previous letter in count object
    or if count of previous letter in object is undefined
  10. if yes, change result to false
  11. if result is false, exit loop
  12. return result
    `, function solution(string) {
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
    let result = true;
    const sorted = string.split('').sort().join('');
    let count = {};
    for (let i = 0; i < sorted.length; i++) {
        let l = sorted[i];
        if (i === 0) {
            count[l] = 1;
        }
        else {
            if (count[l] === undefined) {
                count[l] = 1;
            }
            else {
                count[l]++;
            }
        }
        const index = alpha.indexOf(l) - 1;
        const prevLet = alpha[index];
        if (l === 'a') {
            continue;
        }
        else if (count[l] > count[prevLet] || count[prevLet] === undefined) {
            result = false;
        }
        if (result === false)
            break;
    }
    return result;
});
//# sourceMappingURL=is-beautiful-string.js.map