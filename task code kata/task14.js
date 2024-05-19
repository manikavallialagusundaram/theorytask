const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var radius =userInput;
var circumference = 2 * 3.1415 * radius
console.log(radius);  
console.log(circumference.toFixed(2)); 
});