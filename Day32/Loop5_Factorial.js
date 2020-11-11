const prompt=require('prompt-sync')();
let number=prompt("Enter the number ");
let result=1;
for(var iterator=1;iterator<=number;iterator++){
result=result*iterator;
}
console.log("factorial is "+result);