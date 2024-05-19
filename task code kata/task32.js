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
    var N=(userInput[0].split(""));
    var SUM="";
    for(var i=0;i<userInput[0].length;i++)
    {
        SUM = SUM + N[i] + " ";
    }
      console.log(SUM.trim());
});