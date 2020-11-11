const prompt=require('prompt-sync')();
let month =prompt("Enter the month");
let day=prompt("Enter day");
if(((month=="march")&&(day>20))||(month=="april")||(month=="may")||((month=="june")&&(day<20))) console.log(true);
else console.log(false); 