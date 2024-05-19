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
let Firstnumber = userInput[0];
let Secondnumber = userInput[1];
let Thirdnumber = userInput[2];
if(Firstnumber>Secondnumber && Firstnumber>Thirdnumber)
    {
        console.log(Firstnumber);
    }else if(Secondnumber > Thirdnumber){
        console.log(Secondnumber);
    }else{
        console.log(Thirdnumber);
    }

});