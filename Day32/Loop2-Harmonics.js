const prompt=require('prompt-sync')();
let n=prompt("Enter the number of elements");
let iterator=1;
let result=0;
while(iterator<=parseInt(n)){
result=result+(1/iterator);
iterator++;
}
console.log("total harmonics is "+result);