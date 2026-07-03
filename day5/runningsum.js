class NumArray {
    constructor(nums) {
        // Build anything you need here.
        this.curNums = [];

        this.curNums[0] = nums[0];

        for(let i = 1;i < nums.length; i++){
            this.curNums[i] = this.curNums[i - 1] + nums[i];
        }   
    }

    sumRange(left, right) {
        // Return the sum from left to right.
        console.log(this.curNums);

        if(left == 0){
            return this.curNums[right];
        }

        return this.curNums[right] - this.curNums[left - 1];
    }
}

const obj = new NumArray([-2, 0, 3, -5, 2, -1]);

console.log(obj.sumRange(0, 2)); // 1

console.log(obj.sumRange(2, 5)); // -1

console.log(obj.sumRange(0, 5)); // -3

console.log(obj.sumRange(4, 4)); // 2