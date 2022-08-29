// You are given an array of integers representing coordinates of obstacles situated on a straight line.
// Assume that you are jumping from the point with coordinate 0 to the right. 
// You are allowed only to make jumps of the same length represented by some integer.
// Find the minimal length of the jump enough to avoid all the obstacles.

function solution(array){
    for (let i = 1; ; i++) {
        if (array.every(ele => ele % i )) {
            return i;
        }
    }
};

console.log(`[5, 3, 6, 7, 9] solution is 4: ${solution([5, 3, 6, 7, 9])}`);
console.log(`[2, 3] solution is 4: ${solution([2, 3])}`);
console.log(`[1, 4, 10, 6, 2] solution is 7: ${solution([1, 4, 10, 6, 2])}`);
console.log(`[1000, 999] solution is 6: ${solution([1000, 999])}`);
console.log(`[19, 32, 11, 23] solution is 3: ${solution([19, 32, 11, 23])}`);
console.log(`[5, 8, 9, 13, 14] solution is 6: ${solution([5, 8, 9, 13, 14])}`);


// in a loop start the index (jump) from 1,
//      check if the array at every element % jump, will equal to 0 (falsy)
//      if it equals to 0 (is falsy), return to previous loop and increment the jump, test again
//      if all elements modulous jump, do not equal 0, return the value of the jump

// things learned: you do not need a condition in a loop
// new method - array.every() tests each element in the array (whatever is in the callback function)
