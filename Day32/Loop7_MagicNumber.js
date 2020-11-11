const prompt=require('prompt-sync')();
let guess=0;
let start=0;
let end=100;
let choice;
let check=false;
while(check==false){
    choice=prompt("number is\n1. less than "+(end+start)/2+"\n2. greater than "+(end+start)/2+"\nEnter your choice")
    if(choice==1) end=(end+start)/2;
    else start=(end+start)/2;

    guess=parseInt((end+start)/2);
    choice=prompt("is this your number: "+guess+"\n1. yes\n2. no");
    if(choice==1) check=true;
   
}
console.log("number is "+guess);
