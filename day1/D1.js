

function sumTwo(target, arr) {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let needed = target - arr[i] ;         
        
        if(map.has(needed)){
            return [i, map.get(needed)];
        } else {
            map.set(arr[i], i);
        }
    }

    return [-1,-1];
    
}

const arr = [1, 2, 3, 4, 5];
const tar = 9;

let res = sumTwo(tar, arr);
console.log(res);