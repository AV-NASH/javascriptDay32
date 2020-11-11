const prompt=require('prompt-sync')();
let number=prompt("Enter the number");
let scale=0;
while((number/10)<0) scale++;
 function checkPalindrome(number,scale){
     let palindrome="";
     for(var i=0;i<scale;i++){
       let temp=(number%(10*(i+1)));
       if(i!=0){
           temp=parseINt(temp/(10*i));
       }
       palindrome=palindrome+temp;
     }
     if(parseInt(palindrome)==parseInt(number))
     console.log("number is palindrome");
     else console.log("not palindrome");
     
 }