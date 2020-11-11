const prompt=require('prompt-sync')();
//while
let n=prompt("Enter the power");
let limit=Math.pow(2,parseInt(n));
let value=2;
let pow=0;
while(Math.pow(value,pow)<=limit||Math.pow(value,pow)<=256){
    ++pow;
    
    console.log(Math.pow(value,pow));
}
//for
for(var i=1;Math.pow(value,pow)<=limit;i++){
    console.log(Math.pow(value,pow));
}