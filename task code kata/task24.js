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
let Numbers = userInput[0].split(' ');
let A = Number(Numbers[0]);
let B = Number(Numbers[1]);
let C = Number(Numbers[2]);

let X1 = (-B + ((B**2)-(4*A*C))**0.5)/(2*A);
let X2 = (-B - ((B**2)-(4*A*C))**0.5)/(2*A);

console.log(X1.toFixed(2));
console.log(X2.toFixed(2));



});