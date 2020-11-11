const prompt=require('prompt-sync')();
let number1=prompt("Enter the number 1 ");
let number2=prompt("Enter the number 1 ");

for(var i=number1;i<=number2;i++){
    let check=true;
    for(var iterator=2;iterator<i;iterator++){
        if(i%iterator==0) check=false;
    }
    if(check)console.log(i);
    }