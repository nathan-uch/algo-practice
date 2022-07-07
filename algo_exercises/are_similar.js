// Two arrays are called similar if one can be obtained from another 
// by swapping at most one pair of elements in one of the arrays.
// Given two arrays a and b, check whether they are similar.

// Example: For a = [1, 2, 3] and b = [1, 2, 3], the output should be solution(a, b) = true.
// Example2: For a = [1, 2, 3] and b = [2, 1, 3], the output should be solution(a, b) = true.
// We can obtain b from a by swapping 2 and 1 in b.
// Example3: For a = [1, 2, 2] and b = [2, 1, 1], the output should be solution(a, b) = false.
// Any swap of any two elements either in a or in b won't make a and b equal.


// declare variables for checking if swapping was already checked once, first different number from each array
// loop through one of the arrays
//      check if current index of each array doesn't equal to each other, and if already swapped and if first time not matching
//          if yes, the current numbers of each array are stored in variables
//      if they don't equal each other, not swapped and this is second time not matching
//          check if the second values equal the first one
//                 if they don't equal, return false
//      check if values at indexes for each array don't equal and already swapped once
//           return false
//  if finishes loop, return true 

// function solution(a, b) {
//     let swapped = false;
//     let a1;
//     let b1;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] !== b[i] && swapped === false && a1 === undefined) {
//             a1 = a[i];
//             b1 = b[i];
//         } else if (a[i] !== b[i] && swapped === false && a1 !== undefined) {
//             if (a[i] !== b1 || b[i] !== a1) {
//                 return false;
//             }
//             swapped = true;
//         } else if (a[i] !== b[i] && swapped === true) {
//             return false
//         }

//     }
//     return true;
// }

function solution(a, b) {
    if (a.join('') === b.join('')) {
        return true;
    }
    let a1 = [];
    let b1 = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            a1.push(a[i]);
            b1.push(b[i]);
        }
    }
    b1 = b1.reverse().join('');
    a1 = a1.join('');
    if(b1 === a1) {
        return true;
    }
    return false;
}

console.log('a = [1, 2, 3], b = [1, 2, 3]: TRUE', solution([1, 2, 3], [1, 2, 3]));
console.log('a = [1, 2, 3], b = [2, 1, 3]: TRUE', solution([1, 2, 3], [2, 1, 3]));
console.log('a = [1, 2, 2], b = [2, 1, 1]: FALSE', solution([1, 2, 2], [2, 1, 1]));
console.log('a = [1, 2, 3], b = [1, 10, 2]: FALSE', solution([1, 2, 3], [1, 10, 2]));
console.log('a = [2, 3, 9], b = [10, 3, 2]: FALSE', solution([2, 3, 9], [10, 3, 2]));
console.log('a = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279], b = [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]: FALSE', solution([832, 998, 148, 570, 533, 561, 894, 147, 455, 279], [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]));


