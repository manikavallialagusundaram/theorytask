const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var a =userInput[0].split(" ");
if(a[0]<a[1]){
    console.log(a[0]);
}else{
    console.log(a[1]);
}



});