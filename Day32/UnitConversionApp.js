const prompt=require('prompt-sync')();
console.log("1. feet to inch\n2. inch to feet\n3.feet to meter\n4. meter to feet");
let choice=prompt("Enter your choice");
switch(parseInt(choice)){
    case 1 :{let value=prompt("enter value in feet");
            let inch=value*12; 
            console.log("value in inches "+inch);
            break;
    }

    case 2 :{let value=prompt("enter value in inch");
    let feet=value/12; 
    console.log("value in feet "+feet);
    break;
    }

    case 3 :{let value=prompt("enter value in feet");
    let meter=value*0.305; 
    console.log("value in meter "+meter);
    break;
    }

    case 4 :{let value=prompt("enter value in meter");
    let feet=value*3.281; 
    console.log("value in feet "+feet);
    break;
    }
}