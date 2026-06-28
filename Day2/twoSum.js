function twoSumII(numbers, target) {
    let sum;
    let i = 0;
    let j = numbers.length -1;

    while(i < j){
        sum = numbers[i] + numbers[j];
        
        if(sum == target) return [i, j];
        
        if(sum < target){
            i+=1;
        }else {
            j-=1;
        }
    }
    return [-1,-1];
}

const numbers = [2, 7, 11, 15];
const target = 9;

console.log(twoSumII(numbers, target)); // expected: [0, 1