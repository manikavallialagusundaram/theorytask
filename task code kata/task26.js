// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
var str = userInput[0];

var str1=str.split("");//g u v i 
var result="";
var length=(str1.length);//4
length= length-1;//3-1=2-1=1
for(var i=length;i>=0;i--)//i=4 4>=0 ,3>=0,2>=0,1>=0
{
    result= result + str1[i];//i,v,u,g
    
}
  console.log(result);//i,v,u,g
});

//guvi 
//0 1 2 3 
//i v u g