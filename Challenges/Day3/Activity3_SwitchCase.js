// TASK 4: WRITE A PROGRAM THAT USES A SWITCH CASE TO DETERMINE THE DAY OF THE WEEK BASED ON A NUMBER (1-7) AND LOG THE DAY NAME TO THE CONSOLE.
let day = 3;
switch (day) {
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
        console.log("The day is not between 1 to 7");
        break;
}
console.log("-----------------------");

// TASK 5: WRITE A PROGRAM THAT USES A SWITCH CASE TO ASSIGN A GRADE ('A','B','C','D','F') BASED ON A SCORE AND LOG THE GRADE TO THE CONSOLE.
let marks = 68;
switch (true) {
    case marks<=20:
        console.log("GRADE F");
        break;
    case marks<=35:
        console.log("GRADE D");
        break;
    case marks<=65:
        console.log("GRADE C");
        break;
    case marks<=80:
        console.log("GRADE B");
        break;
    case marks<=100:
        console.log("GRADE A");
        break;
    default:
        console.log("NO GRADE");
        break;
}
// REMEMBER THAT IF YOU ARE USING CONDITION IN SWITCH CASE, THEN YOU NEED TO PASS true IN SWITCH CASE, OTHERWISE IT WON'T WORK.

// OUTPUT
/*
node Activity3_SwitchCase.js 
WEDNESDAY
-----------------------
GRADE B
*/
