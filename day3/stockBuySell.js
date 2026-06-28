/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let left = 0;
    let right = 0;
    
    while(right < prices.length) {
        let cur = prices[right] - prices[left];

        if(cur > max){
            max = cur;
        }

        if(prices[left] > prices[right]) {
            left = right;
        }
        
        right ++;

    }
    
    return max;
};

console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1]));   // 0
console.log(maxProfit([2,4,1]));       // 2
console.log(maxProfit([1,2]));         // 1
console.log(maxProfit([2,1,2,1,0,1,2])); // 2
console.log(maxProfit([3,2,6,5,0,3]));
console.log(maxProfit([2,1]));