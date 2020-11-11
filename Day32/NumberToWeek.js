//if-else
const prompt=require('prompt-sync')();
let digit1=prompt("Enter the week number");
let text1;
if(digit1==1)text1="Monday";
if(digit1==2)text1="Tuesday";
if(digit1==3)text1="Wednesday";
if(digit1==4)text1="Thursday";
if(digit1==5)text1="Friday";
if(digit1==6)text1="Saturday";
if(digit1==7)text1="Sunday";
console.log("week is "+text1);

//switch
let digit2=prompt("Enter the week number");
let text2;
switch(parseInt(digit2)){
    case 1:text2="Monday";
    break;
    case 2:text2="Tuesday";
    break;
    case 3:text2="Wednesday";
    break;
    case 4:text2="Thursday";
    break;
    case 5:text2="Friday";
    break;
    case 6:text2="Saturday";
    break;
    case 7:text2="Sunday";
    break;
}
console.log("week is "+text2);