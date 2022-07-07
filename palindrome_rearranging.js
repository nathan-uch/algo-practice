// Given a string, find out if its characters can be rearranged to form a palindrome.

function solution(inputString) {
    let letterObj = {};
    for (let i = 0; i < inputString.length; i++) {
        if (letterObj[inputString[i]] === undefined) {
            letterObj[inputString[i]] = 1;
        } else {
            letterObj[inputString[i]]++;
        }
    }
    let odd = null;
    for (const letter in letterObj) {
        if (letterObj[letter] % 2 !== 0) {
            odd++;
        }
    }
    if (odd > 1) {
        return false;
    }
    return true;
}


console.log(`'aabb' should equal true`, solution('aabb'));
console.log(`'abbcabb' should equal true`, solution('abbcabb'));
console.log(`'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc' should equal false`, solution('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc'));
console.log(`'zaa' should equal true`, solution('zaa'));
console.log(`'z' should equal true`, solution('z'));
console.log(`'zyyzzzzz' should equal true`, solution('zyyzzzzz'));
