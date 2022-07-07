// You are given an array of integers. 
// On each move you are allowed to increase exactly one of its element by one. 
// Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

function solution(array) {
    count = 0;
    for (var i = 1; i < array.length; i++) {
        while (array[i] <= array[i-1]) {
            array[i]++;
            count++;
        }
    }
    return count;
}

console.log('[1, 1, 1] should equal 3', solution([1, 1, 1]));
console.log('[2, 1, 10, 1] should equal 12', solution([2, 1, 10, 1]));
console.log('[-1000, 0, -2, 0] should equal 5', solution([-1000, 0, -2, 0]));
