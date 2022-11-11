import ProblemInfo from '../components/info-class.js';
export const IsAnagram = new ProblemInfo('Is Anagram', 'Easy', 'Sep 6, 2022', 'Leet Code / Neet Code', 'https://leetcode.com/problems/valid-anagram/', 'Check if two strings are anagram of each other.', true, false, '', '', `
  1. Convert both strings to array
  2. sort both arrays
  3. revert to string
  4. check if both strings are equal
    `, function solution(s, t) {
    const a = s.split('').sort().join('');
    const b = t.split('').sort().join('');
    if (a === b)
        return true;
    return false;
}, function solution2(s, t) {
    if (s.length !== t.length)
        return false;
    let hash = {};
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] === undefined) {
            hash[s[i]] = 1;
        }
        else {
            hash[s[i]]++;
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (hash[t[i]] === undefined || hash[t[i]] === 0)
            return false;
        if (hash[t[i]])
            hash[t[i]]--;
        if (hash[t[i]] === 0)
            delete hash[t[i]];
    }
    return true;
});
//# sourceMappingURL=is-anagram.js.map