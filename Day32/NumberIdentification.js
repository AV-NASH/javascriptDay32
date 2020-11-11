//if-else
const prompt=require('prompt-sync')();
let digit1=prompt("Enter the number");
if(digit1==1) console.log("number is in units");
if(digit1==10) console.log("number is in tens");
if(digit1==100) console.log("number is in hundreds");
if(digit1==1000) console.log("number is in thousands");

//switch
let digit2=prompt("Enter the number");
let text;
switch(parseInt(digit2)){
    case 1: text="number is in units";
            break;
    case 10: text="number is in tens";
            break;
    case 100: text="number is in hundreds";
            break;
    case 1000: text="number is in thousands";
            break;
}
console.log(text);