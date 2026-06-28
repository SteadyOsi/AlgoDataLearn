function isValid(s) {
    const coresponding = new Map([
        ["(", ")"],
        ["{", "}"],
        ["[", "]"]
    ]);

    let stack = [];

    for(const char of s){
        if(coresponding.has(char)){
            stack.push(char);
        }else if(char !== coresponding.get(stack[stack.length - 1])){
            return false;
        } else {
            stack.pop();
        }
    }

    if(stack.length > 0){
        return false;
    }
    return true;
}

console.log(isValid("()"));      // true
console.log(isValid("([)]"));    // false
console.log(isValid("{[]}"));    // true
console.log(isValid("{({})}{]}"));        // false
console.log(isValid("((("));        // false