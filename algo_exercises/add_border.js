// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// picture = ["abc",
//            "ded"]

// solution(picture) = ["*****",
//                      "*abc*",
//                      "*ded*",
//                      "*****"]

function solution(picture) {
    let finalPic = [];
    let borderSize = picture[0].length +2;
    let yAxis = '';
    for (let i = 0; i < borderSize; i++) {
        yAxis += '*';
    }
    finalPic.push(yAxis);
    for (let b = 0; b < picture.length; b++) {
        let curRow = '*' + picture[b] + '*';
        finalPic.push(curRow);
    }
    finalPic.push(yAxis);
    return finalPic;
}

console.log(solution(['abc', 'ded']));