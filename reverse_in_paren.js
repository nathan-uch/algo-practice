// Write a function that reverses characters in (possibly nested) parentheses in the input string.
// Input strings will always be well-formed with matching ()s.

function solution(s) {
    let x = s;
    while (x.includes('(')) {
        const endB = x.indexOf(')');
        const startB = x.lastIndexOf('(', endB);
        const str = x.slice(startB + 1, endB);
        const reversedStr = str.split('').reverse().join('');
        x = x.slice(0, startB) + reversedStr + x.slice(endB + 1);
    }
    return x;
}
  
console.log('Answer: rab =', solution('(bar)'));
console.log('Answer: foorabbaz =', solution('foo(bar)baz'));
console.log('Answer: foorabbazmilb =', solution('foo(bar)baz(blim)'));
console.log('Answer: foobazrabblim =', solution('foo(bar(baz))blim'));