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
StringsRearrangement.topics = 'Permutation & Recursion';
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
        const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        const sorted = [];
        for (let i = 0; i < a.length; i++) {
            sorted.push(a[i].split('').sort().join(''));
        }
    
        for (let c = 0; c < sorted.length; c++) {
            let count = 0;
            if (sorted[c+1] !== undefined) {
                for (let k = 0; k < sorted[c].length; k++) {
                    // CHANGE CHECKING INCREMENTING ALPHABETICAL ORDER
                    if (sorted[c][k] !== sorted[c+1][k]) {
                        const index = alpha.indexOf(sorted[c][k])
                        const lett = sorted[c+1][k]
                        if (lett !== alpha[index-1] || alpha[index+1]) return false;
                        count++
                    }
                }
            }
            if (count > 1) return false;
        }
        return true;
    }

    const depthFirstSearch = (i, nums) => {
        //base case
        if (i === inputArray.length) {
            result = checkArray(nums.slice());
            if(result === true) return true;
            return;
        } 

        // dfs recursive case
        for (let j = i; j < inputArray.length; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]] //swap positions
            depthFirstSearch(i + 1, nums);
            [nums[i], nums[j]] = [nums[j], nums[i]] //swap back
        }
    }

    depthFirstSearch(0, inputArray);
    return result;
}

