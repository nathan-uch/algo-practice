// loop through the first word
// declare a count for how many letters are common
//       loop through each word in the array
//              check if the first letter of the first word equals to the first letter of the current word in array
//                  if not, return the number of letters from the first word at the common letters variable
//                  if variable is 0, return empty string
//                  if loop ends, increment count

var longestCommonPrefix = function(strs) {
    let prefix = '';
    if (strs.length === 0) {
        return prefix;
    }
    var firstWord = strs[0];
    let prefixCount = 0;
    for (let i = 0; i < firstWord.length; i++) {
        for (let a = 1; a < strs.length; a++) {
            if (firstWord[i] !== strs[a][i]) {
                prefix = firstWord.substring(0, prefixCount);
                return prefix;
            }
        }
        prefixCount++;
    }
    prefix = firstWord.substring(0, prefixCount);
    return prefix;
};


// return empty string if no common prefix

console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["flower","flow","flight"]));
