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
var a=userInput;//2
b=a*2;//4
c=a*3//6
console.log(a + " " + b + " "+ c)
  //end-here
});