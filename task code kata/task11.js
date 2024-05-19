const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
let a = userInput[0].split(" ");
let A = a[0];
let N = a[1];
for( let i=0;i<N;i++)
    {
        console.log(A);
    }
});