/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {

}

// Example 1
console.log(search([-1, 0, 3, 5, 9, 12], 9));   // 4

// Example 2
console.log(search([-1, 0, 3, 5, 9, 12], 2));   // -1

// Target is first element
console.log(search([1, 3, 5, 7, 9], 1));        // 0

// Target is last element
console.log(search([1, 3, 5, 7, 9], 9));        // 4

// Single element (found)
console.log(search([5], 5));                    // 0

// Single element (not found)
console.log(search([5], 3));                    // -1

// Two elements (first)
console.log(search([2, 4], 2));                 // 0

// Two elements (second)
console.log(search([2, 4], 4));                 // 1

// Target smaller than all elements
console.log(search([10, 20, 30], 5));           // -1

// Target larger than all elements
console.log(search([10, 20, 30], 40));          // -1

// Negative numbers
console.log(search([-20, -10, -5, 0, 8], -10)); // 1

// Target in the middle
console.log(search([2, 4, 6, 8, 10], 6));       // 2

// Larger array
console.log(search([1,2,3,4,5,6,7,8,9,10], 8)); // 7