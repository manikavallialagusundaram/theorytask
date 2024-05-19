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
while(a[0]!=a[1])
     {
    if(a[0]>a[1])//2>3
      a[0]=a[0]-a[1];
    else
        a[1]=a[1]-a[0];
    }
    console.log(a[0]);
});