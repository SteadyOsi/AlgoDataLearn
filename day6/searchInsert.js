/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        let middle = Math.floor((right + left)/2);
        if(nums[middle] === target){
            return middle;
        } else if(nums[middle] < target){
            left = middle + 1;
        } else {
            right = middle - 1;
        }
        // console.log("middle " + middle);
    }
    return left;
}

console.log(searchInsert([1,3,5,6], 5)); // 2
console.log(searchInsert([1,3,5,6], 2)); // 1
console.log(searchInsert([1,3,5,6], 7)); // 4
console.log(searchInsert([1,3,5,6], 0)); // 0

// Single element
console.log(searchInsert([1], 1)); // 0
console.log(searchInsert([1], 0)); // 0
console.log(searchInsert([1], 2)); // 1

// Insert at beginning
console.log(searchInsert([10,20,30], 5)); // 0

// Insert at end
console.log(searchInsert([10,20,30], 40)); // 3

// Insert in middle
console.log(searchInsert([10,20,30,40], 25)); // 2

// Already exists
console.log(searchInsert([10,20,30,40], 30)); // 2
