// DAY OF THE WEEK SCRIPT: WRITE A SCRIPT THAT USES A SWITCH CASE TO DETERMINE THE DAY OF THE WEEK BASED ON A NUMBER (1-7) AND LOGS THE DAY NAME.

let days = [1,3,2,4,6,5,7];
let count = 0;
do {
    switch(days[count])
    {
        case 1:
            console.log("MONDAY");
            break;
        case 2:
            console.log("TUESDAY");
            break;
        case 3:
            console.log("WEDNESDAY");
            break;
        case 4:
            console.log("THURSDAY");
            break;
        case 5:
            console.log("FRIDAY");
            break;
        case 6:
            console.log("SATURDAY");
            break;
        case 7:
            console.log("SUNDAY");
            break;
        default:
            console.log("NO DAY");
            break;
    }
    count++;
} while (count!=7);

// OUTPUT
/*
node FeatureRequest3.js 
MONDAY
WEDNESDAY
TUESDAY
THURSDAY
SATURDAY
FRIDAY
SUNDAY
*/