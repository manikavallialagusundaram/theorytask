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
let celsius = Number(userInput[0]);
let Fahrenheit = (1.8)* (celsius) + 32;
Fahrenheit1 = Fahrenheit.toFixed(2);
console.log(Fahrenheit1);

});