function subarraySum(nums, k) {

    for(let i = 1; i < nums.length; i ++) {
        nums[i] = nums[i - 1] + nums[i];
    }

    
    return -1;
}

console.log(subarraySum([1, 1, 1], 2));           // 2

console.log(subarraySum([1, 2, 3], 3));           // 2

console.log(subarraySum([1], 1));                 // 1

console.log(subarraySum([1], 2));                 // 0

console.log(subarraySum([3, 4, 7, 2, -3, 1, 4, 2], 7)); // 4

console.log(subarraySum([0, 0, 0], 0));           // 6

console.log(subarraySum([-1, -1, 1], 0));         // 1