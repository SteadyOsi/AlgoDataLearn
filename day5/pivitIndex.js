function pivotIndex(nums) {
    if (nums.length === 0) return -1;

    let i = 1;

    while(i < nums.length){
        nums[i] = nums[i] + nums[i - 1];
        i++;
    }

    let left = 0;
    let right;

    for (let i = 0; i < nums.length; i++){
        right = nums[nums.length - 1] - nums[i];

        if(i == 0) {
            left = 0;
        } else{
            left = nums[i - 1];
        }

        if(right === left){
            return i;
        }
    }

    return -1;
}

// 1 2 3 4 5
// 1 3 6 10 15
// 

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3

console.log(pivotIndex([1, 2, 3])); // -1

console.log(pivotIndex([2, 1, -1])); // 0
// 2 , 3, 2

console.log(pivotIndex([0, 0, 0])); // 0

console.log(pivotIndex([1, -1, 0])); // 2

console.log(pivotIndex([1])); // 0

console.log(pivotIndex([1, 2, 1])); // 1