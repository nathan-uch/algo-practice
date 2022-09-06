import ProblemInfo from '../info_template.js';

export const StringsRearrangement = new ProblemInfo;
StringsRearrangement.name = 'Strings Rearrangement';
StringsRearrangement.website = 'Code Signal';
StringsRearrangement.link = 'https://app.codesignal.com/arcade/intro/level-7/PTWhv2oWqd6p4AHB9';
StringsRearrangement.date = 'Sep 5, 2022';
StringsRearrangement.difficulty = 'Medium';
StringsRearrangement.recommendedTime = 25;
StringsRearrangement.timeToComplete = 0;
StringsRearrangement.complete = false;
StringsRearrangement.problem = 'Check if 2 consecutive strings can be different by only 1 char in an array.';
StringsRearrangement.topics = 'Permutation & Recursion';
StringsRearrangement.usedHelp = true;
StringsRearrangement.pseudoCode = `
Function: checking consecutive strings difference
1. sort both strings,
2. create a count variable for difference
3. loop through string and check if they are not equal at each index
    4. if not equal, increase count by 1
    5. check if count is not greater than 1
        6. if greater than one, return false
7. if loop ends, return true

Function: permutations of array (solution)
1. get the length of array
2. 

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
        for (let i = 0; i < a.length; i++) {
            a[i].split('').sort().join('');
        }
        for (let k = 0; k < a.length; k++) {
            let count = 0;
            if (a[k+1] === undefined) break;
            if (a[k] !== a[k+1]) {
                for (let p = 0; p < a[k].length; p++) {
                    if (a[k][p] !== a[k+1][p]) { count++; }
                }
            }
            if (count === 1) return true;
        }
        return false;
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
    }

    return depthFirstSearch(0, inputArray);
}

const answer =
solution(["q", "q"]);
// false
solution(["ab", "ad", "ef", "eg"]);
// false
solution(["abc", "abx", "axx", "abc"]);
// false