const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var N=userInput
for(i=1;i<=N;i++)
{
    console.log(i);
}

    
});