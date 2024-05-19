const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
let n=userInput;
let fact = 1;
for(i=1;i<=n;i++)
{
fact= fact * i;
}
console.log(fact);
    
});