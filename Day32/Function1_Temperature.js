const prompt=require('prompt-sync')();
let choice=prompt("1. degF to degC\n2. degC to degF\nEnter your choice");
let temp;
switch(parseInt(choice)){
    case 1:{
        do{
         temp=prompt("Enter the temp in degF");
        if(temp>32&&temp<212){
            console.log("temp in degC is "+degFTodegC(temp));
        }
        else console.log("enter correct temp");
    }while(!(temp>32&&temp<212));
    }

    case 2:{
        do{
         temp=prompt("Enter the temp in degC");
        if(temp>0&&temp<100){
            console.log("temp in degF is "+degCTodegF(temp));
        }
        else console.log("enter correct temp");
    }while(!(temp>0&&temp<100));
    }
    }

function degFTodegC(degF){
    return ((degF-32)*(5/9));
}

function degCTodegF(degC){
    return (degC*(9/5)+32);
}