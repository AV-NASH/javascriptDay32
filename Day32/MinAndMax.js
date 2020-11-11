let value1=(Math.floor(Math.random()*900))+100;
let value2=(Math.floor(Math.random()*900))+100;
let value3=(Math.floor(Math.random()*900))+100;
let value4=(Math.floor(Math.random()*900))+100;
let value5=(Math.floor(Math.random()*900))+100;
let max=value1;
let min=value1;

if(max<value2) max=value2;
if(max<value3) max=value3;
if(max<value4) max=value4;
if(max<value5) max=value5;

if(min>value2) min=value2;
if(min>value3) min=value3;
if(min>value4) min=value4;
if(min>value5) min=value5;

console.log("min is "+min);
console.log("max is "+ max);