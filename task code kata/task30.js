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
    var A= userInput[0].split("");
    var sum=0;
    for(var i=0;i<userInput[0].length;i++)
    {
       sum= sum + +A[i]; 
    }
      console.log(sum);
});