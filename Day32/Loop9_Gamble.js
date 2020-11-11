let outcome;
let amount=100;
let no_of_bet=0;
let no_of_time_win=0;

while(amount!=200&&amount!=0){
   
 outcome=(Math.floor(Math.random()*10)%2)+1;
 no_of_bet++;
 if(outcome==1){amount++;
                no_of_time_win++;}
 else amount--;
 console.log("amount after bet is--> "+amount);
}

if(amount==200) console.log("congratulations you won");
else
console.log("sorry you lose");
console.log("no of bet is "+no_of_bet+"\nno of times you win is "+no_of_time_win);