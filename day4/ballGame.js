function calPoints(operations) {
    // Your code here
    let stack = [];

    for(const char of operations){

        if(char === "C"){
            stack.pop();

        } else if(char === "D"){
            let lastScore = stack.pop();
            stack.push(lastScore);
            stack.push(lastScore * 2);

        } else if (char === "+"){
            let score1 = stack.pop();
            let score2 = stack.pop();
            let score12 = score1 + score2;
            
            stack.push(score2);
            stack.push(score1);
            stack.push(score12);

        } else {
            let num = parseInt(char);
            stack.push(num);

        }
    }

    let sum = 0;
    while(stack.length){
        sum += stack.pop();
    }

    return sum;
}

console.log(calPoints(["5","2","C","D","+"])); // 30

console.log(calPoints(["5","2","C","D","+"]));           // 30

console.log(calPoints(["5","-2","4","C","D","9","+","+"]));// 27

console.log(calPoints(["1"]));// 1

console.log(calPoints(["1","D"]));// 3

console.log(calPoints(["1","2","+"]));// 6