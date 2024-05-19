// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
let N = userInput[0];
let meter = 1000 * N;
let centimeter = 100000 * N;
console.log(meter);
console.log(centimeter);




});