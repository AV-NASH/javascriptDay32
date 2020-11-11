const prompt=require('prompt-sync')();
let year =prompt("Enter the year");
if((year%400!=0)&&(year%100==0)) console.log("not a leap year");
else{ 
    if(year%4!=0)console.log("not a leap year");
    else console.log(" it is a leap year");
}