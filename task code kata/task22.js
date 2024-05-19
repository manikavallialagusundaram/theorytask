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
let P = userInput[0].split(' ');
let SI= P[0] * P[1] * P[2] /100;
SI=SI.toFixed(2);
console.log(SI);

});