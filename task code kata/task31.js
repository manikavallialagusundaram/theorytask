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
let N = Number(userInput[0]);
let output = "";
for(let i=1;i<=N;i++){
    output = output + i**2 +' ';
}
console.log(output);


});