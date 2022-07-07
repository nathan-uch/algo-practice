// Given a string 's' containing just the characters '(', ')', '{', '}', '[', ']', determine 
// if the input string is valid.
// An input string is valid if :
//      1. Open brackets must be closed by the same type of brackets.
//      2. Open brackets must be closed in the correct order.
//  return true or false


// create a stack array
// loop through string
//      if current letter is one of the opening braces
//          push closing braces to the end of the stack array
//      if it's a closing bracket and the last letter in the stack is the same bracket
//          remove it from the stack
//      if it goes through all the statements and didn't run any code blocks, return false
//  if at the end of the loop, the stack contains anything, return false
//  if not, return true

var isValid = function(s) {
    let stack = [];

    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(')');
        } else if (s[i] === '[') {
            stack.push(']');
        } else if (s[i] === '{') {
            stack.push('}');
        } else if (s[i] === ')' && stack[stack.length -1] === ')') {
            stack.pop();
        } else if (s[i] === ']' && stack[stack.length -1] === ']') {
            stack.pop();
        } else if (s[i] === '}' && stack[stack.length -1] === '}') {
            stack.pop();
        } else {
            return false;
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
}


console.log('should be true:', isValid('()'));
console.log('should be true:', isValid('()[]{}'));
console.log('should be false:', isValid('(]'));
console.log('should be true:', isValid('[{}]'));
console.log('should be false:', isValid('([)]'));
console.log('should be false:', isValid('){'));
console.log('should be false:', isValid('([}}])'));
console.log('should be false:', isValid('))'));
console.log('should be false:', isValid('[({])}'));
