let toss;
let headcount=0;
let tailcount=0;
while(headcount<11||tailcount<11){
   toss= (Math.floor(Math.random()*10)%2)+1;
if(toss==1)headcount++;
else tailcount++;
}

if(headcount==11)console.log("head won");
else console.log("tails won");