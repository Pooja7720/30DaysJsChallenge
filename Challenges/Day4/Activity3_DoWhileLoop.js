// TASK 5: WRITE A PROGRAM TO PRINT NUMBERS FROM 1 TO 5 USING A DO...WHILE LOOP.

let num = 1;
do {
    console.log(num);
    num++;
} while (num!=5);
console.log("----------------------------------");

// TASK 6: WRITE A PROGRAM TO CALCULATE THE FACTORIAL OF A NUMBER USING A DO...WHILE LOOP.

let val = 12;
let fact = 1;
let count = val;
do {

    fact = fact * count;
    count--;
} while (count!=1);
console.log("The factorial of",val,"is: ",fact);
console.log("----------------------------------");

// OUTPUT
/*
node Activity3_DoWhileLoop.js 
1
2
3
4
----------------------------------
The factorial of 12 is:  479001600
----------------------------------
*/