const prompt=require('prompt-sync')();
let number=prompt("Enter the number ");
let check=true;
for(var iterator=2;iterator<number;iterator++){
    if(number%iterator==0) check=false;
}
if(check==true)console.log("number is prime");
else console.log("number is not prime");