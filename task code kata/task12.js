const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var N=userInput[0];
for(i=0;i<=N;i++)
{
    console.log(N);
}
    
});