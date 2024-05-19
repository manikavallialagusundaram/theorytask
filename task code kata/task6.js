const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var a = userInput[0].split(" ");
var SI = a[0] * a[1] * a[2]/100;//1000*2*5/100=100
SI=SI.toFixed(2);//
console.log(SI);


});