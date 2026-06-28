/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function backspaceCompare(s, t) {
    // Your code here

    let firstS = "";
    let firstT = "";

    let sStack = [];
    let tStack = [];

    for(const char of s){
        if(char === "#"){
            sStack.pop();
        } else {
            sStack.push(char);
        }
    }

    for(const char of t){
        if(char === "#"){
            tStack.pop();
        } else {
            tStack.push(char);
        }
    }

    if(JSON.stringify(sStack) === JSON.stringify(tStack)) {
        return true;
    }

    return false;
}

console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a#c", "b"));     // false