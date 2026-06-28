// You are given an array of heights.

// Each value represents a vertical line.

// You pick TWO lines.

// The lines plus the x-axis form a container.

// Goal:
// Find the maximum amount of water the container can hold.

function maxArea(height) {
    let lPointer = 0;
    let rPointer = height.length -1;
    let curMax = 0;

    while (lPointer < rPointer){
        let vol;
        if(height[lPointer] > height[rPointer]){
            vol = (rPointer - lPointer) * height[rPointer];
            rPointer -= 1;
        } else {
            vol = (rPointer - lPointer) * height[lPointer];
            lPointer += 1;
        }
        
        if(vol > curMax){
            curMax = vol;
        }

    }
    return curMax;
}

const height = [1,8,6,2,5,4,8,3,7];

console.log(maxArea(height));
// expected: 49
