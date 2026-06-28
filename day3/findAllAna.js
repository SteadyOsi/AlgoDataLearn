/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let resAna = [];
    let lp = 0;
    let rp = 0;
    let targetMap = new Map();
    let windowMap = new Map();
    let tracker = 0;

    // set target window
    for(const char of p){
        if(targetMap.has(char)){
            targetMap.set(char, targetMap.get(char) + 1);
        } else {
            targetMap.set(char, 1);
        }
    }

    // inital window
    while(rp < p.length){
        
        if(windowMap.has(s.charAt(rp))){
            windowMap.set(s.charAt(rp), windowMap.get(s.charAt(rp)) + 1);
        } else {
            windowMap.set(s.charAt(rp), 1);
        }
        
        if(windowMap.has(s.charAt(rp)) == targetMap.has(s.charAt(rp))){
            tracker += 1;
        }

        rp += 1;
    }

    if(tracker === p.length){
        resAna.push(lp);
    }

    while(rp < s.length){
        // add new element
        if(windowMap.has(s.charAt(rp))){
            windowMap.set(s.charAt(rp), windowMap.get(s.charAt(rp)) + 1);
        } else {
            windowMap.set(s.charAt(rp), 1);
        }

        // add new element tracker if so
        if(windowMap.get(s.charAt(rp)) === targetMap.get(s.charAt(rp))){
            tracker += 1;
        }

        // remove old elmenet tracker if so
        if(windowMap.get(s.charAt(lp)) === targetMap.get(s.charAt(lp))){
            tracker -= 1;
        }

        // remove old element
        if(windowMap.has(s.charAt(lp))){
            windowMap.set(s.charAt(lp), windowMap.get(s.charAt(lp)) - 1);
        }

        lp += 1;
        rp+=1;

        // if tracker match then add lp to resAna
        if(tracker === p.length){
            resAna.push(lp);
        }
    }
    return resAna;

};

console.log(findAnagrams("cbaebabacd", "abc")); // [0, 6]
console.log(findAnagrams("abab", "ab")); // [0, 1, 2]
console.log(findAnagrams("baa", "aa")); // [1]
console.log(findAnagrams("aaaaaaaaaa", "aa")); // [0,1,2,3,4,5,6,7,8]
console.log(findAnagrams("abcdefg", "hijj")); // []