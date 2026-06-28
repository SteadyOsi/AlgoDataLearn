function runningSum(nums) {
    if (nums.length === 0) return [];
    // Your code here

    let i = 1;

    while(i < nums.length){
        nums[i] = (nums[i] + nums[i-1]);
        i++;
    }

    return nums;
}

const tests = [
    [[1, 2, 3, 4], [1, 3, 6, 10]],
    [[5, 1, 2], [5, 6, 8]],
    [[10], [10]],
    [[0, 0, 0], [0, 0, 0]],
    [[1, 1, 1, 1, 1], [1, 2, 3, 4, 5]],
    [[3, 7, 2, 5], [3, 10, 12, 17]],
    [[2, -1, 3, -2], [2, 1, 4, 2]],
    [[-1, -2, -3], [-1, -3, -6]]
];

for (const [input, expected] of tests) {
    const result = runningSum(input);
    console.log(
        JSON.stringify(result) === JSON.stringify(expected)
            ? "PASS"
            : `FAIL: got ${JSON.stringify(result)} expected ${JSON.stringify(expected)}`
    );
}
