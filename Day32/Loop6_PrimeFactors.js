const prompt=require('prompt-sync')();
let number=prompt("Enter the number ");
let result="";
let value=parseInt(number);
for(var iterator=2;iterator*iterator<=number;iterator++){
   
    while(value%iterator==0){
        value=value/iterator;
        result=result+iterator+"x"; 
    }
}
result=result+"1";
console.log(result);