// Call two arms equally strong if the heaviest weights they each are able to lift are equal.
// Call two people equally strong if their strongest arms are equally strong (the strongest arm 
// can be both the right and the left), and so are their weakest arms.
// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

// declare a variable for remaining arm
// check if your firs arm equals to friend's left arm
//      if yes, put other friend's arm in remaining arm
//      if no, put this arm in remaining arm
// check if my other arm is equal to the friend's remaining arm
//      if yes, return true
//      if not, return false

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    let otherArm = null;
    if (yourLeft === friendsLeft) {
        otherArm = friendsRight;
    } else if (yourLeft === friendsRight) {
        otherArm = friendsLeft;
    } else {
        return false;
    }
    if (yourRight === otherArm) {
        return true;
    }
    return false;
}