// loop through the string 's',
// create value starting at 0 for final integer
// at teach letter, add value according to numerals object
// check what is the following number (if subtraction is needed)
//         if yes, add following number to value
//                  multiply current number by 2, subtract from value 
//                  and increment counter
//         if no, continue loop
// return final value from function



const romanToInt = s => {
    var finalInteger = 0;
    for (var i = 0; i < s.length; i++) {
        finalInteger += numerals[s[i]];
        if (s[i] === 'I' && s[i+1] === 'V' || s[i] === 'I' && s[i+1] === 'X') {
            finalInteger += numerals[s[i+1]];
            finalInteger -= (numerals[s[i]] * 2)
            i++
        } else if (s[i] === 'X' && s[i+1] === 'L' || s[i] === 'X' && s[i+1] === 'C') {
            finalInteger += numerals[s[i+1]];
            finalInteger -= (numerals[s[i]] * 2)
            i++
        } else if (s[i] === 'C' && s[i+1] === 'D' || s[i] === 'C' && s[i+1] === 'M') {
            finalInteger += numerals[s[i+1]];
            finalInteger -= (numerals[s[i]] * 2)
            i++
        }
    }
    return finalInteger;
}

const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

// (I) IV = 4, IX = 9
// (X) XL = 50, XC = 90
// (C) CD = 400, CM = 900

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));


