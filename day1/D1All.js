function ContainsDuplicate(arr){ // take a array of numbers, returns boolean
    let dups = new Set();
    for(let i = 0; i < arr.length; i++){
        if(dups.has(arr[i])){
            return true;
        }
        dups.add(arr[i]);
    }
    return false;
}

function FrequencyOfST(s, t){
    let freq = new Map();

    if(s.length !== t.length) return false;

    for(let char in Array.from(s)){
        if(freq.has(s[char])){
            freq.set(s[char], freq.get(s[char]) + 1);
        } else {
            freq.set(s[char], 1);
        }
    }

    for(let char in Array.from(t)){
        if(freq.get(t[char]) == 0) return false;

        if(freq.has(t[char])){
            freq.set(t[char], freq.get(t[char]) - 1);
        } else {
            return false;
        }
    }

    return true;
    
}

// with the array of intergers 
function TwoSum(target, arr){
    let sums = new Map();

    for(let i = 0; i < arr.length; i++){
        let needed = target - arr[i];
        
        if(sums.has(needed)){
            return [i, sums.get(needed)];
        }
        sums.set(arr[i], i);
    }

    return [-1, -1];
}


function IntersectionArrays(arr1, arr2){
    let cols = new Set(arr1);
    let result = new Set();
    
    arr2.forEach(element => {

        if(cols.has(element)) result.add(element);
    });

    return Array.from(result);
}

// test contains dups 

const arr1 = [1,2,3,4];
const arr2 = [5,4,3];

console.log(IntersectionArrays(arr1, arr2));