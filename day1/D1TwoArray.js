function TwoArray(arr1, arr2){
    let temp = new Set(arr1);
    let result = new Set();

    arr2.forEach(element => {
        if(temp.has(element)) result.add(element);
    });

    return Array.from(result);
}

const arr1 = [1,2,3,5];
const arr2 = [3,4,5,1];

console.log(TwoArray(arr1, arr2));