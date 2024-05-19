//You are given Two Numbers, A and B. If C = A + B. Find C.

//Note: Round off the output to a single decimal place.

//Input Description:
//You are provided with two numbers A and B.

//Output Description:
//Find the sum of the two numbers (A + B)

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var A = userInput[0];//1
var B = userInput[1];//1
var C = parseInt(A)+parseInt(B);//2
C = C.toFixed(1);
console.log(C);

});