//if-else
const prompt=require('prompt-sync')();
let digit1=prompt("Enter the number");
if(digit1==0) console.log("Number is zero");
if(digit1==1) console.log("Number is one");
if(digit1==2) console.log("Number is two");
if(digit1==3) console.log("Number is three");
if(digit1==4) console.log("Number is four");
if(digit1==5) console.log("Number is five");
if(digit1==6) console.log("Number is six");
if(digit1==7) console.log("Number is seven");
if(digit1==8) console.log("Number is eight");
if(digit1==9) console.log("Number is nine");

//switch
let digit2=prompt("Enter the number");
let text;
switch(parseInt(digit2)){
    case 0:  text="zero";
            break;
    case 1: text="one";
            break;
    case 2: text="two";
            break; 
    case 3: text="three";
            break; 
    case 4: text="four";
            break; 
    case 5: text="five";
            break;
    case 6: text="six";
            break; 
    case 7: text="seven";
            break;
    case 8: text="eight";
            break;
    case 9: text="nine";
            break;                   
}
console.log("Number is "+text);

