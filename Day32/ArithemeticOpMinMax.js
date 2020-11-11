const prompt=require('prompt-sync')();
let num1=prompt("Enter first number");
let num2=prompt("Enter second number");
let num3=prompt("Enter third number");


value1=parseInt(num1)+(parseInt(num2)*parseInt(num3));
value2=parseInt(num3)+(parseInt(num1)/parseInt(num2));
value3=(parseInt(num1)%parseInt(num2))+parseInt(num3);
value4=(parseInt(num1)*parseInt(num2))+parseInt(num3);

let max=value1;
let min=value1;

if(max<value2) max=value2;
if(max<value3) max=value3;
if(max<value4) max=value4;

if(min>value2) min=value2;
if(min>value3) min=value3;
if(min>value4) min=value4;

console.log("min is "+min);
console.log("max is "+ max);

