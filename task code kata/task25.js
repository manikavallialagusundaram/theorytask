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
let Side = parseInt(userInput);
let Perimeter = (Side + Side + Side)/2;
let Area = Math.sqrt(Perimeter * ((Perimeter-Side) *(Perimeter-Side) * (Perimeter-Side)));
console.log(Area.toFixed(2));


});