import ProblemInfo from '../info_template.js';

export const StringsRearrangement = new ProblemInfo;
StringsRearrangement.name = 'Strings Rearrangement';
StringsRearrangement.website = 'Code Signal';
StringsRearrangement.link = 'https://app.codesignal.com/arcade/intro/level-7/PTWhv2oWqd6p4AHB9';
StringsRearrangement.date = 'Sep 5, 2022';
StringsRearrangement.difficulty = 'Medium';
StringsRearrangement.recommendedTime = 25;
StringsRearrangement.timeToComplete = 90;
StringsRearrangement.complete = false;
StringsRearrangement.problem = 'Check if 2 consecutive strings can be different by only 1 char in an array.';
StringsRearrangement.topics = 'Permutation (DFS) & Recursion';
StringsRearrangement.usedHelp = true;
StringsRearrangement.pseudoCode = `
1. 
`;

/* Problem & Example:
Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. 
Return true if it's possible, and false if not.
Note: You're only rearranging the order of the strings, not the order of the letters within the strings!

Example1:
For inputArray = ["aba", "bbb", "bab"], the output should be
solution(inputArray) = false.

There are 6 possible arrangements for these strings:
["aba", "bbb", "bab"]
["bbb", "aba", "bab"]
["bbb", "bab", "aba"]
["bab", "bbb", "aba"]
["aba", "bab", "bbb"]
["bab", "aba", "bbb"]
None of these satisfy the condition of consecutive strings differing by 1 character, so the answer is false.

Example2:
For inputArray = ["ab", "bb", "aa"], the output should be
solution(inputArray) = true.

It's possible to arrange these strings in a way that each consecutive pair of strings differ by 1 character 
(eg: "aa", "ab", "bb" or "bb", "ab", "aa"), so return true.

*/

function solution(inputArray) {
    let result = false;

    const checkArray = a => {
        let check = false;
        for (let i = 0; i < a.length; i++) {
            a[i].split('').sort().join('');
        }
        for (let k = 0; k < a.length; k++) {
            let count = 0;
            if (a[k+1] === undefined) break;
            if (a[k] !== a[k+1]) {
                for (let p = 0; p < a[k].length; p++) {
                    console.log(a[k][p], a[k+1][p])
                    if (a[k][p] !== a[k+1][p]) { count++; }
                }
            }
            if (count === 1) {
                check = true;
            } else {
                check = false;
                break;
            }
        }
        return check;
    }

    const depthFirstSearch = (i, nums) => {
        //base case
        if (i === inputArray.length) {
            result = checkArray(nums.slice());
            if (result === true) return true;
        } 
        // dfs recursive case
        // starting i at 0, loop over input array
        for (let j = i; j < inputArray.length; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]] //swap positions
            depthFirstSearch(i + 1, nums);
            [nums[i], nums[j]] = [nums[j], nums[i]] //swap back
        }
        return result;
    }

    return depthFirstSearch(0, inputArray);
}

// solution:
/*
function solution(a) {
  for (let i = 0; i < a.length; i++) {
    let remaining = findNext(a[i], a);
    if (remaining.length === 0) return true;
  }
  return false;
}

function findNext(current, a) {
  if (a.length === 0) return a;
  for (let i = 0; i < a.length; i++) {
    if (differsByOneChar(current, a[i])) {
      let remaining = findNext(a[i], a.slice(0, i).concat(a.slice(i+1)));
      if (remaining.length === 0) return remaining;
    }
  }
  return a;
}

function differsByOneChar(s1, s2) {
  let mismatches = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) mismatches++;
    if (mismatches > 1) break;
  }
  return mismatches === 1;
}
*/