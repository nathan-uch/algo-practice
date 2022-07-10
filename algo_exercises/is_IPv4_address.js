// Given a string, find out if it satisfies the IPv4 address naming rules.

// An identification number for devices connected to the internet. 
// An IPv4 addresses written in dotted quad notation consists of four 8-bit integers separated by periods.

// In other words, it's a string of four numbers each between 0 and 255 inclusive, 
// with a "." character in between each number. All numbers should be present without leading zeros.

function solution(string) {
    let array = string.split('.');
    if (array.length === 4) {
        console.log(array);
        for (var i = 0; i < array.length; i++) {
            if (isNaN(array[i]) === true || array[i] > 255 || Number(array[i]).toString() !== array[i]) {
                return false
            }
        }
    } else {
        return false
    }
    return true
}
