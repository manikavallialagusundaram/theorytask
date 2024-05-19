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
var N = userInput[0];//6
for(i=2;i<=N;i=+ i+2)//2,2<=6,+2+2=4//4,4<=6,+4+2
{
    console.log(i);
}
});