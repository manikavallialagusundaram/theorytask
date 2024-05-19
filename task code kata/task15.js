const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
let year = userInput[0];
if((0==year % 4) && 
   (0!=year % 100) || 
   (0== year % 400)){
    console.log('y');
}else{
    console.log('N');
}
});