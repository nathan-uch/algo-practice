// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// declare variable to hold largest difference
// loop over array
//      get difference between current array value and next array value
//      check if the value is negative
//          if yes, multiply by -1
//          check if current difference is larger than original largest difference
//              if yes, replace the value
// return the largest difference


function solution(array) {
    let largest = 0;
    for (let i = 0; i < array.length; i++) {
        let curDif = array[i] - array[i+1];
        if (curDif < 0) {
            curDif *= -1;
        }
        if ( curDif > largest) {
            largest = curDif;
        }
    }
    return largest;
}