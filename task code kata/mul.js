const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var a = userInput[0];//a=3
var b=[" "]
var result = 0;
for(i=1;i<=a;i++){//1<3
  if(i<a){//1<3
    result=result+9*i+[" "];//0=0+9*1
  }else{
    result=result+9*i;
  }
}
console.log(result);

});