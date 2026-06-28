/**
 * @param {string[]} tokens
 * @return {number}
 */

function evalRPN(tokens) {
    // Your code here
    let stack = [];

    for(const char of tokens){
        if(char === "+"){
            let s1 = stack.pop();
            let s2 = stack.pop()
            stack.push(s1 + s2);
        
        } else if(char === "-"){
            let s1 = stack.pop();
            let s2 = stack.pop()
            stack.push(s2 - s1);

        } else if(char === "*") {
            let s1 = stack.pop();
            let s2 = stack.pop()
            stack.push(s1 * s2);
  
        } else if(char === "/") {
            let s1 = stack.pop();
            let s2 = stack.pop();
            stack.push(Math.trunc(s2 / s1));

        } else {
            let cur = parseInt(char);
            stack.push(cur);
        }
    }

    return stack.pop();
}

console.log(evalRPN(["2","1","+","3","*"]));      // 9
console.log(evalRPN(["4","13","5","/","+"]));     // 6
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])); // 22

console.log(evalRPN(["4","2","-"])); 