const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
  var a =2;
if(a==0){
  console.log('zero');
}else if(a%2==0){
   console.log('even number');
}else{
  console.log('odd number');
}
});